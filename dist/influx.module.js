"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InfluxModule = void 0;
var common_1 = require("@nestjs/common");
var influx_service_1 = require("./influx.service");
var InfluxModule = /** @class */ (function () {
    function InfluxModule() {
    }
    InfluxModule_1 = InfluxModule;
    InfluxModule.forRoot = function (options) {
        return {
            module: InfluxModule_1,
            providers: [
                {
                    provide: "INFLUX_OPTIONS",
                    useValue: options
                },
                influx_service_1.InfluxDbService,
            ],
            exports: [influx_service_1.InfluxDbService]
        };
    };
    InfluxModule.forRootAsync = function (options) {
        return {
            module: InfluxModule_1,
            providers: [
                {
                    provide: "INFLUX_OPTIONS",
                    useFactory: options.useFactory,
                    inject: options.inject || []
                },
                influx_service_1.InfluxDbService,
            ],
            imports: options.imports || [],
            exports: [influx_service_1.InfluxDbService]
        };
    };
    var InfluxModule_1;
    InfluxModule = InfluxModule_1 = __decorate([
        (0, common_1.Global)(),
        (0, common_1.Module)({})
    ], InfluxModule);
    return InfluxModule;
}());
exports.InfluxModule = InfluxModule;
