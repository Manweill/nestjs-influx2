import { Inject, Injectable } from "@nestjs/common";
import { InfluxDB, WriteApi, QueryApi } from "@influxdata/influxdb-client";
import { InfluxModuleOptions } from "./interfaces";

@Injectable()
export class InfluxDbService {
    connection: InfluxDB | null;
    constructor(
        @Inject("INFLUX_2_OPTIONS")
        private readonly config: InfluxModuleOptions
    ) {
        this.connection = null;
        this.connect();
    }

    public connect(): void {
        this.connection = new InfluxDB(this.config);
    }

    public writeApi(
        ...args: Parameters<InfluxDB["getWriteApi"]>
    ): WriteApi | undefined {
        if (this.connection) {
            return this.connection.getWriteApi(...args);
        }
    }

    public getQueryApi(
        ...args: Parameters<InfluxDB["getQueryApi"]>
    ): QueryApi | undefined {
        if (this.connection) {
            return this.connection.getQueryApi(...args);
        }
    }
}
