import { HttpException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Model, PopulateOptions } from "mongoose";
import { PaginationDto } from "../dto/Pagination.dto";

export class CommonService {
    public static getMongoURI() {
        const configService = new ConfigService();
        const HOST = configService.get("MONGO_DB_HOST");
        const DB_NAME = configService.get("MONGO_DB_NAME");
        const PORT = configService.get("MONGO_DB_PORT");
        //const USER = configService.get("");
        //const PASSWORD = configService.get("");
        return `mongodb://${HOST}:${PORT}/${DB_NAME}`;
    }

    public static throwException(message: string, code: number = 500) {
        throw new HttpException(message, code ?? 500);
    }

    public static paginateModel<T>(
        model: Model<T>,
        filters: PaginationDto,
        populateOptions: PopulateOptions[] = [],
        searchFields: string[] = []
    ) {
        if (filters.search != "" && filters.search) {
            filters.$or = this.getSearch(filters.search, searchFields);
        }
        return model.find(filters)
            .limit(filters.showRows || 20)
            .skip(filters.showRows * filters.page || 0)
            .populate(populateOptions);
    }

    private static getSearch(search: string, fields: string[]) {
        return fields.map((field) => ({ [field]: { $regex: search, $options: "i" } }));
    }
}