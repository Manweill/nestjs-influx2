![npm version](https://badgen.net/npm/v/nest-influxdb)
![downloads](https://badgen.net/npm/dm/nest-influxdb)
![issues](https://badgen.net/github/issues/vlzh/nest-influxdb)

# Description

InfluxDB module for Nest based on the official [InfluxDb package](https://yarnpkg.com/en/package/influx).

# Installation

```bash
npm install nest-influx2 --save
```

or

```bash
yarn add nest-influx2
```

# Usage

Register module:

```javascript
import { Module } from "@nestjs/common";
import { InfluxModule, InfluxModuleOptions } from "nest-influx2";
import { UtilsModule } from "./utils/utils.module";
import { ConfigService } from "./utils/config/config.service";

@Module({
    imports: [
        InfluxModule.forRootAsync({
            imports: [UtilsModule],
            inject: [ConfigService],
            useFactory: async (
                config_servie: ConfigService
            ): Promise<InfluxModuleOptions> => {
                return {
                    url: config_servie.get("INFLUX_HOST"),
                    token: config_servie.get("INFLUX_TOKEN"),
                };
            }
        }),
        TrafficModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
```

Get access to `InfluxDbService` in some your service:

```javascript
@Injectable()
export class TrafficService {
    constructor(private readonly influx_service: InfluxService) {}

    public async getLastDay(): Promise<ResponseDto> {
        const results = await this.influx_service.query(`
            select MEAN(*) from traffic WHERE time > now() - 1d GROUP BY time(10m);
        `);

        return results.map(pointToDto);
    }
}
```