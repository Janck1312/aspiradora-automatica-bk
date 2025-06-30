import { Inject, Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TimeUseModule } from './time-use/time-use.module';
import { CommonService } from './exchange/helpers/common.service';
import { DistanceModule } from './distance/distance.module';
import { UsesModule } from './uses/uses.module';
import { MachineStateModule } from './machine-state/machine-state.module';
import { MachineStateService } from './machine-state/machine-state.service';

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
export class AppModule implements OnModuleInit {
    constructor(@Inject(MachineStateService) private machineStateService: MachineStateService) { }

    async onModuleInit() {
        const powerStates = await this.machineStateService.findAll({
            page: 0,
            search: "",
            showRows: 20
        });
        if (powerStates.length <= 0) {
            await this.machineStateService.create({
                power: false
            });
        }
    }
}
