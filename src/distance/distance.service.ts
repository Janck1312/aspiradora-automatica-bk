import { Injectable, NotFoundException } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { Distance } from './entities/distance.entity';
import { InjectModel } from '@nestjs/mongoose';
import { CommonService } from 'src/exchange/helpers/common.service';
import { PaginationDto } from 'src/exchange/dto/Pagination.dto';
import { CreateDistanceDto } from './dto/create-distance.dto';
import { UpdateDistanceDto } from './dto/update-distance.dto';

@Injectable()
export class DistanceService {
    constructor(
        @InjectModel(Distance.name) private readonly distanceModel: Model<Distance>
    ) { }

    async create(createTimeUseDto: CreateDistanceDto) {
        try {
            const distance = await this.distanceModel.create(createTimeUseDto);
            return distance;
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }

    async update(updateTimeUseDto: UpdateDistanceDto, id: Types.ObjectId) {
        try {
            const distance = await this.distanceModel.findById(id);
            if (!distance) throw new Error("record not found");
            Object.assign(distance, updateTimeUseDto);
            return await distance.save();
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }

    async findAll(paginationDto: PaginationDto) {
        try {
            return await CommonService.paginateModel(
                this.distanceModel,
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
            const distance = await this.distanceModel.findById(id);
            if (!distance) throw new NotFoundException("record not found");
            return distance;
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }

    async delete(id: Types.ObjectId) {
        try {
            const distance = await this.distanceModel.findById(id);
            if (!distance) throw new NotFoundException("record not found");
            await distance.deleteOne({ _id: distance._id });
            return {
                success: true
            };
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }
}
