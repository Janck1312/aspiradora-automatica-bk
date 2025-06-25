import { Module } from '@nestjs/common';
import { UsesController } from './uses.controller';
import { UsesService } from './uses.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Uses, UsesSchema } from './entities/uses.entity';

@Module({
  controllers: [UsesController],
  providers: [UsesService],
  imports: [
    MongooseModule.forFeature([{ name: Uses.name, schema: UsesSchema }])
  ]
})
export class UsesModule { }
