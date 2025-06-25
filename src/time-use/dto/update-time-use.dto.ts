import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsString, IsOptional, IsEnum } from "class-validator";
import { timeUseTypeEnum } from "src/exchange/enums/timeUseType.enum";
import { CreateTimeUseDto } from "./create-time-use.dto";

export class UpdateTimeUseDto extends CreateTimeUseDto {
    @ApiProperty()
    @IsDateString()
    @IsOptional()
    start: string;

    @ApiProperty()
    @IsDateString()
    @IsOptional()
    end: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    duration: string

    @ApiProperty({ enum: timeUseTypeEnum, enumName: "timeUseTypeEnum", example: timeUseTypeEnum.EXECUTION })
    @IsEnum({ enum: timeUseTypeEnum })
    @IsOptional()
    type: timeUseTypeEnum;
}