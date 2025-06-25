import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty } from "class-validator";

export class CreateMachineStateDto {
    @ApiProperty()
    @IsBoolean()
    @Type(() => Boolean)
    @IsNotEmpty()
    power: boolean;
}