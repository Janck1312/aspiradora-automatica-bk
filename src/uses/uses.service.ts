import { Injectable, NotFoundException } from '@nestjs/common';
import { Uses } from './entities/uses.entity';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CommonService } from 'src/exchange/helpers/common.service';
import { PaginationDto } from 'src/exchange/dto/Pagination.dto';
import { CreateUseDto } from './dto/create-use.dto';
import { UpdateUseDto } from './dto/update-use.dto';

@Injectable()
export class UsesService {
    constructor(
        @InjectModel(Uses.name) private readonly usesModel: Model<Uses>
    ) { }

    async create(createUseDto: CreateUseDto) {
        try {
            const use = await this.usesModel.create(createUseDto);
            return use;
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }

    async update(updateUseDto: UpdateUseDto, id: Types.ObjectId) {
        try {
            const use = await this.usesModel.findById(id);
            if (!use) throw new Error("record not found");
            Object.assign(use, updateUseDto);
            return await use.save();
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }

    async findAll(paginationDto: PaginationDto) {
        try {
            return await CommonService.paginateModel(
                this.usesModel,
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
            const use = await this.usesModel.findById(id);
            if (!use) throw new NotFoundException("record not found");
            return use;
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }

    async delete(id: Types.ObjectId) {
        try {
            const use = await this.usesModel.findById(id);
            if (!use) throw new NotFoundException("record not found");
            await use.deleteOne({ _id: use._id });
            return {
                success: true
            };
        } catch (error) {
            CommonService.throwException(error.message, error.code);
        }
    }
}
