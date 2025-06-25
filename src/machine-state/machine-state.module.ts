import { Module } from '@nestjs/common';
import { MachineStateController } from './machine-state.controller';
import { MachineStateService } from './machine-state.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MachineState, MachineStateSchema } from './entities/machine-state.entity';

@Module({
  controllers: [MachineStateController],
  providers: [MachineStateService],
  imports: [
    MongooseModule.forFeature([{ name: MachineState.name, schema: MachineStateSchema }])
  ]
})
export class MachineStateModule { }
