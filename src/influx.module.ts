import { DynamicModule, Module, Global } from "@nestjs/common";
import { InfluxDbService } from "./influx.service";
import { InfluxModuleAsyncOptions, InfluxModuleOptions } from "./interfaces";

@Global()
@Module({})
export class Influx2Module {
    static forRoot(options: InfluxModuleOptions): DynamicModule {
        return {
            module: Influx2Module,
            providers: [
                {
                    provide: "INFLUX_DB_OPTIONS",
                    useValue: options,
                },
                InfluxDbService,
            ],
            exports: [InfluxDbService],
        };
    }
    static forRootAsync(options: InfluxModuleAsyncOptions): DynamicModule {
        return {
            module: Influx2Module,
            providers: [
                {
                    provide: "INFLUX_DB_OPTIONS",
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
