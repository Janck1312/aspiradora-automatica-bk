import { ApiProperty } from "@nestjs/swagger";
import { IsMongoId, IsOptional, IsEnum } from "class-validator";
import { Types } from "mongoose";
import { stateUsesEnum } from "src/exchange/enums/stateUses.enum";
import { usesTypeEnum } from "src/exchange/enums/usesType.enum";

export class UpdateUseDto {
    @ApiProperty()
    @IsMongoId()
    @IsOptional()
    distance_id: Types.ObjectId;

    @ApiProperty()
    @IsMongoId()
    @IsOptional()
    time_use_id: Types.ObjectId;

    @ApiProperty()
    @IsEnum({ enum: usesTypeEnum })
    @IsOptional()
    type: usesTypeEnum;

    @ApiProperty()
    @IsEnum({ enum: stateUsesEnum })
    @IsOptional()
    state: stateUsesEnum;
}