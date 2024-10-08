import { InfluxDB, WriteApi, QueryApi } from "@influxdata/influxdb-client";
import { InfluxModuleOptions } from "./interfaces";
export declare class InfluxDbService {
    private readonly config;
    connection: InfluxDB | null;
    constructor(config: InfluxModuleOptions);
    connect(): void;
    writeApi(...args: Parameters<InfluxDB["getWriteApi"]>): WriteApi | undefined;
    getQueryApi(...args: Parameters<InfluxDB["getQueryApi"]>): QueryApi | undefined;
}
//# sourceMappingURL=influx.service.d.ts.map