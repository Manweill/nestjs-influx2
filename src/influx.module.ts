import { DynamicModule, Module, Global } from "@nestjs/common";
import { InfluxDbService } from "./influx.service";
import { InfluxModuleAsyncOptions, InfluxModuleOptions } from "./interfaces";

@Global()
@Module({})
export class InfluxModule {
    static forRoot(options: InfluxModuleOptions): DynamicModule {
        return {
            module: InfluxModule,
            providers: [
                {
                    provide: "INFLUX_OPTIONS",
                    useValue: options,
                },
                InfluxDbService,
            ],
            exports: [InfluxDbService],
        };
    }
    static forRootAsync(options: InfluxModuleAsyncOptions): DynamicModule {
        return {
            module: InfluxModule,
            providers: [
                {
                    provide: "INFLUX_OPTIONS",
                    useFactory: options.useFactory,
                    inject: options.inject || [],
                },
                InfluxDbService,
            ],
            imports: options.imports || [],
            exports: [InfluxDbService],
        };
    }
}
