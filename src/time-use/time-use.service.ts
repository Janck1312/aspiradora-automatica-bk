import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTimeUseDto } from './dto/create-time-use.dto';
import { UpdateTimeUseDto } from './dto/update-time-use.dto';
import { PaginationDto } from 'src/exchange/dto/Pagination.dto';
import { Model, Types } from 'mongoose';
import { CommonService } from 'src/exchange/helpers/common.service';
import { InjectModel } from '@nestjs/mongoose';
import { TimeUse } from './entities/time-use.entity';

@Injectable()
export class TimeUseService {
    constructor(
        @InjectModel(TimeUse.name) private readonly timeUseModel: Model<TimeUse>
    ) { }

    async create(createTimeUseDto: CreateTimeUseDto) {
        try {
            const timeUse = await this.timeUseModel.create(createTimeUseDto);
            return timeUse;
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }

    async update(updateTimeUseDto: UpdateTimeUseDto, id: Types.ObjectId) {
        try {
            const timeUse = await this.timeUseModel.findById(id);
            if (!timeUse) throw new Error("record not found");
            Object.assign(timeUse, updateTimeUseDto);
            return await timeUse.save();
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }

    async findAll(paginationDto: PaginationDto) {
        try {
            return await CommonService.paginateModel(
                this.timeUseModel,
                paginationDto,
                [],
                []
            );
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }

    async findById(id: Types.ObjectId) {
        try {
            const timeUse = await this.timeUseModel.findById(id);
            if (!timeUse) throw new NotFoundException("record not found");
            return timeUse;
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }

    async delete(id: Types.ObjectId) {
        try {
            const timeUse = await this.timeUseModel.findById(id);
            if (!timeUse) throw new NotFoundException("record not found");
            await timeUse.deleteOne({ _id: timeUse._id });
            return {
                success: true
            };
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }
}
