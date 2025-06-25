import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsSemVer, IsString } from "class-validator";
import { timeUseTypeEnum } from "src/exchange/enums/timeUseType.enum";

export class CreateTimeUseDto {
    @ApiProperty()
    @IsDateString()
    @IsNotEmpty()
    start: string;

    @ApiProperty()
    @IsDateString()
    @IsNotEmpty()
    end: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    duration: string

    @ApiProperty({ enum: timeUseTypeEnum, enumName: "timeUseTypeEnum", example: timeUseTypeEnum.EXECUTION })
    @IsEnum({ enum: timeUseTypeEnum })
    @IsNotEmpty()
    type: timeUseTypeEnum;
}