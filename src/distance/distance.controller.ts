import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DistanceService } from './distance.service';
import { CreateDistanceDto } from './dto/create-distance.dto';
import { UpdateDistanceDto } from './dto/update-distance.dto';
import { Types } from 'mongoose';
import { PaginationDto } from 'src/exchange/dto/Pagination.dto';

@Controller('distance')
@ApiTags('distance')
export class DistanceController {
    constructor(private readonly distanceService: DistanceService) { }

    @Get()
    findAll(@Query() PaginationDto: PaginationDto) {
        return this.distanceService.findAll(PaginationDto);
    }

    @Get("/:id")
    findById(@Param('id') id: Types.ObjectId) {
        return this.distanceService.findById(id);
    }

    @Post()
    create(@Body() createTimeUseDto: CreateDistanceDto) {
        return this.distanceService.create(createTimeUseDto);
    }

    @Put("/:id")
    update(@Body() updateTimeUseDto: UpdateDistanceDto, @Param('id') id: Types.ObjectId) {
        return this.distanceService.update(updateTimeUseDto, id);
    }

    @Delete("/:id")
    delete(@Param() id: Types.ObjectId) {
        return this.distanceService.delete(id);
    }
}
