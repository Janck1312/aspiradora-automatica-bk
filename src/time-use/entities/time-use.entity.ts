import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { timeUseTypeEnum } from "src/exchange/enums/timeUseType.enum";

export type TimeUseDocument = HydratedDocument<TimeUse>;

@Schema({ timestamps: true })
export class TimeUse {
    @Prop({ type: String, required: true })
    start: string;

    @Prop({ type: String, required: true })
    end: string;

    @Prop({ type: String, required: false })
    duration: string;

    @Prop({
        enum: timeUseTypeEnum,
        type: String
    })
    type: timeUseTypeEnum;
}

export const TimeUseSchema = SchemaFactory.createForClass(TimeUse);