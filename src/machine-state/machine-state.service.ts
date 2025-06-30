import { Injectable, NotFoundException } from '@nestjs/common';
import { MachineState } from './entities/machine-state.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CommonService } from 'src/exchange/helpers/common.service';
import { PaginationDto } from 'src/exchange/dto/Pagination.dto';
import { CreateMachineStateDto } from './dto/create-machine-state.dto';
import { UpdateMachineStateDto } from './dto/update-machine-state.dto';
import { ArduinoService } from 'src/exchange/services/arduino';

@Injectable()
export class MachineStateService {
    constructor(
        @InjectModel(MachineState.name) private readonly machineStateModel: Model<MachineState>
    ) { }

    async create(createMachineStateDto: CreateMachineStateDto) {
        try {
            const machineState = await this.machineStateModel.create(createMachineStateDto);
            return machineState;
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }

    async update(updateMachineStateDto: UpdateMachineStateDto, id: Types.ObjectId) {
        try {
            const arduinoService = ArduinoService.getInstance();
            const machineState = await this.machineStateModel.findById(id);
            if (!machineState) throw new Error("record not found");
            Object.assign(machineState, updateMachineStateDto);
            await arduinoService.toggleVacumCleaner(machineState.power ? "ON" : "OFF");
            return await machineState.save();
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }

    async findAll(paginationDto: PaginationDto) {
        try {
            return await CommonService.paginateModel(
                this.machineStateModel,
                paginationDto,
            );
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }

    async findById(id: Types.ObjectId) {
        try {
            const machineState = await this.machineStateModel.findById(id);
            if (!machineState) throw new NotFoundException("record not found");
            return machineState;
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }

    async delete(id: Types.ObjectId) {
        try {
            const machineState = await this.machineStateModel.findById(id);
            if (!machineState) throw new NotFoundException("record not found");
            await machineState.deleteOne({ _id: machineState._id });
            return {
                success: true
            };
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }
}
