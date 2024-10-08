import { DynamicModule } from "@nestjs/common";
import { InfluxModuleAsyncOptions, InfluxModuleOptions } from "./interfaces";
export declare class InfluxModule {
    static forRoot(options: InfluxModuleOptions): DynamicModule;
    static forRootAsync(options: InfluxModuleAsyncOptions): DynamicModule;
}
//# sourceMappingURL=influx.module.d.ts.map