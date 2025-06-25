import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Distance } from "src/distance/entities/distance.entity";
import { stateUsesEnum } from "src/exchange/enums/stateUses.enum";
import { usesTypeEnum } from "src/exchange/enums/usesType.enum";
import { TimeUse } from "src/time-use/entities/time-use.entity";

export type UsesDocument = HydratedDocument<Uses>;

@Schema({ timestamps: true })
export class Uses {
    @Prop({ ref: () => Distance, type: Types.ObjectId })
    distance_id: Types.ObjectId;

    @Prop({ ref: () => TimeUse, type: Types.ObjectId })
    time_use_id: Types.ObjectId;

    @Prop({ type: String, enum: usesTypeEnum })
    type: usesTypeEnum

    @Prop({ enum: stateUsesEnum, type: String })
    state: stateUsesEnum;
}

export const UsesSchema = SchemaFactory.createForClass(Uses);