import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MachineStateService } from './machine-state.service';
import { Types } from 'mongoose';
import { PaginationDto } from 'src/exchange/dto/Pagination.dto';
import { CreateMachineStateDto } from './dto/create-machine-state.dto';
import { UpdateMachineStateDto } from './dto/update-machine-state.dto';

@Controller('machine-state')
@ApiTags('machine-state')
export class MachineStateController {
    constructor(private readonly machineStateService: MachineStateService) { }

    @Get()
    findAll(@Query() PaginationDto: PaginationDto) {
        return this.machineStateService.findAll(PaginationDto);
    }

    @Get("/:id")
    findById(@Param('id') id: Types.ObjectId) {
        return this.machineStateService.findById(id);
    }

    @Post()
    create(@Body() createTimeUseDto: CreateMachineStateDto) {
        return this.machineStateService.create(createTimeUseDto);
    }

    @Put("/:id")
    update(@Body() updateTimeUseDto: UpdateMachineStateDto, @Param('id') id: Types.ObjectId) {
        return this.machineStateService.update(updateTimeUseDto, id);
    }

    @Delete("/:id")
    delete(@Param() id: Types.ObjectId) {
        return this.machineStateService.delete(id);
    }
}
