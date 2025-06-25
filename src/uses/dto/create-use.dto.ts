import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsMongoId, IsNotEmpty } from "class-validator";
import { Types } from "mongoose";
import { stateUsesEnum } from "src/exchange/enums/stateUses.enum";
import { usesTypeEnum } from "src/exchange/enums/usesType.enum";

export class CreateUseDto {
    @ApiProperty()
    @IsMongoId()
    @IsNotEmpty()
    distance_id: Types.ObjectId;

    @ApiProperty()
    @IsMongoId()
    @IsNotEmpty()
    time_use_id: Types.ObjectId;

    @ApiProperty()
    @IsEnum({ enum: usesTypeEnum })
    @IsNotEmpty()
    type: usesTypeEnum;

    @ApiProperty()
    @IsEnum({ enum: stateUsesEnum })
    @IsNotEmpty()
    state: stateUsesEnum;
}