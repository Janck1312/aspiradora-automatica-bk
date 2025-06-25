import { Module } from '@nestjs/common';
import { DistanceController } from './distance.controller';
import { DistanceService } from './distance.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Distance, DistanceSchema } from './entities/distance.entity';

@Module({
  controllers: [DistanceController],
  providers: [DistanceService],
  imports: [
    MongooseModule.forFeature([{ name: Distance.name, schema: DistanceSchema }])
  ]
})
export class DistanceModule { }
