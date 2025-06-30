import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional } from "class-validator";

export class PaginationDto {
    @ApiProperty()
    @Type(() => String)
    @IsOptional()
    search: string;

    @ApiProperty()
    @Type(() => Number)
    @IsOptional()
    page: number;

    @ApiProperty()
    @IsOptional()
    @Type(() => Number)
    showRows: number;

    $or?: any[];
}