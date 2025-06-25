import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TimeUseModule } from './time-use/time-use.module';
import { CommonService } from './exchange/helpers/common.service';
import { DistanceModule } from './distance/distance.module';
import { UsesModule } from './uses/uses.module';
import { MachineStateModule } from './machine-state/machine-state.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        MongooseModule.forRoot(CommonService.getMongoURI()),
        TimeUseModule,
        DistanceModule,
        UsesModule,
        MachineStateModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
