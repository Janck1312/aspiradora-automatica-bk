import { distanceTypeEnum } from "src/exchange/enums/distanceType.enum";
import { CreateDistanceDto } from "./create-distance.dto";
import { IsEnum, IsNumber, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateDistanceDto extends CreateDistanceDto {
    @ApiProperty()
    @IsOptional()
    @IsNumber()
    meters: number;

    @ApiProperty()
    @IsOptional()
    @IsEnum({ enum: distanceTypeEnum })
    type: distanceTypeEnum;
}