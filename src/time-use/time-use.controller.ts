import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/exchange/dto/Pagination.dto';
import { TimeUseService } from './time-use.service';
import { Types } from 'mongoose';
import { CreateTimeUseDto } from './dto/create-time-use.dto';
import { UpdateTimeUseDto } from './dto/update-time-use.dto';

@ApiTags('time-use')
@Controller('time-use')
export class TimeUseController {
    constructor(private readonly timeUseService: TimeUseService) { }

    @Get()
    findAll(@Query() PaginationDto: PaginationDto) {
        return this.timeUseService.findAll(PaginationDto);
    }

    @Get("/:id")
    findById(@Param('id') id: Types.ObjectId) {
        return this.timeUseService.findById(id);
    }

    @Post()
    create(@Body() createTimeUseDto: CreateTimeUseDto) {
        return this.timeUseService.create(createTimeUseDto);
    }

    @Put("/:id")
    update(@Body() updateTimeUseDto: UpdateTimeUseDto, @Param('id') id: Types.ObjectId) {
        return this.timeUseService.update(updateTimeUseDto, id);
    }

    @Delete("/:id")
    delete(@Param() id: Types.ObjectId) {
        return this.timeUseService.delete(id);
    }
}
