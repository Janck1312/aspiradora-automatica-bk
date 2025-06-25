import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";
import { distanceTypeEnum } from "src/exchange/enums/distanceType.enum";

export class CreateDistanceDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    meters: number;

    @ApiProperty({ enum: distanceTypeEnum, type: String })
    @IsEnum({ enum: distanceTypeEnum })
    @IsNotEmpty()
    type: distanceTypeEnum;
}