"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.InfluxDbService = void 0;
var common_1 = require("@nestjs/common");
var influxdb_client_1 = require("@influxdata/influxdb-client");
var InfluxDbService = /** @class */ (function () {
    function InfluxDbService(config) {
        this.config = config;
        this.connection = null;
        this.connect();
    }
    InfluxDbService.prototype.connect = function () {
        this.connection = new influxdb_client_1.InfluxDB(this.config);
    };
    InfluxDbService.prototype.writeApi = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.connection) {
            return (_a = this.connection).getWriteApi.apply(_a, args);
        }
    };
    InfluxDbService.prototype.getQueryApi = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.connection) {
            return (_a = this.connection).getQueryApi.apply(_a, args);
        }
    };
    InfluxDbService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, common_1.Inject)("INFLUX_OPTIONS")),
        __metadata("design:paramtypes", [Object])
    ], InfluxDbService);
    return InfluxDbService;
}());
exports.InfluxDbService = InfluxDbService;
