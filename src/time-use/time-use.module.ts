import { Module } from '@nestjs/common';
import { TimeUseController } from './time-use.controller';
import { TimeUseService } from './time-use.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TimeUse, TimeUseSchema } from './entities/time-use.entity';

@Module({
  controllers: [TimeUseController],
  providers: [TimeUseService],
  imports: [
    MongooseModule.forFeature([{ name: TimeUse.name, schema: TimeUseSchema }])
  ]
})
export class TimeUseModule { }
