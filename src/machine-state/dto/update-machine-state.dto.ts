import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsOptional } from "class-validator";

export class UpdateMachineStateDto {
    @ApiProperty()
    @IsBoolean()
    @Type(() => Boolean)
    @IsOptional()
    power: boolean;
}