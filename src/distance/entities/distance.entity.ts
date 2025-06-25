import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { distanceTypeEnum } from "src/exchange/enums/distanceType.enum";

export type DistanceDocument = HydratedDocument<Distance>;

@Schema({ timestamps: true })
export class Distance {
    @Prop({ isRequired: true, type: Number })
    meters: number;

    @Prop({ enum: distanceTypeEnum, type: String, isRequired: true })
    type: string;
}

export const DistanceSchema = SchemaFactory.createForClass(Distance);