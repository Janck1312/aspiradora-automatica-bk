import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TimeUseModule } from './time-use/time-use.module';
import { CommonService } from './exchange/helpers/common.service';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        MongooseModule.forRoot(CommonService.getMongoURI()),
        TimeUseModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
