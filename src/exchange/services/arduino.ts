import { ConfigService } from "@nestjs/config";
import axios from "axios";

export class ArduinoService {
    protected configService: ConfigService;
    public static getInstance() {
        const instance = new ArduinoService();
        instance.configService = new ConfigService();
        return instance;
    }

    public async toggleVacumCleaner(state: "ON" | "OFF" = "OFF") {
        const res = await axios.get(`${this.configService.get("API_VACUM_CLEANER")}/command?cmd=${state}`);
        return res.data;
    }

    public async getDistance() {
        const res = await axios.get(`${this.configService.get("API_VACUM_CLEANER")}/get-distance-traveled`);
        return res.data;
    }
}