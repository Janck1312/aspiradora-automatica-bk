import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MachineStateDocument = HydratedDocument<MachineState>;

@Schema({ timestamps: true })
export class MachineState {
    @Prop({ type: Boolean, required: true })
    power: boolean;
}

export const MachineStateSchema = SchemaFactory.createForClass(MachineState);