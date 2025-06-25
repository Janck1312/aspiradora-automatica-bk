import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsesService } from './uses.service';
import { CreateUseDto } from './dto/create-use.dto';
import { UpdateUseDto } from './dto/update-use.dto';
import { Types } from 'mongoose';
import { PaginationDto } from 'src/exchange/dto/Pagination.dto';

@Controller('uses')
@ApiTags('uses')
export class UsesController {
    constructor(private readonly usesService: UsesService) { }

    @Get()
    findAll(@Query() PaginationDto: PaginationDto) {
        return this.usesService.findAll(PaginationDto);
    }

    @Get("/:id")
    findById(@Param('id') id: Types.ObjectId) {
        return this.usesService.findById(id);
    }

    @Post()
    create(@Body() createTimeUseDto: CreateUseDto) {
        return this.usesService.create(createTimeUseDto);
    }

    @Put("/:id")
    update(@Body() updateTimeUseDto: UpdateUseDto, @Param('id') id: Types.ObjectId) {
        return this.usesService.update(updateTimeUseDto, id);
    }

    @Delete("/:id")
    delete(@Param() id: Types.ObjectId) {
        return this.usesService.delete(id);
    }
}
