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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const city_entity_1 = require("./entities/city.entity");
const typeorm_2 = require("@nestjs/typeorm");
let CitiesService = class CitiesService {
    citiesRepository;
    constructor(citiesRepository) {
        this.citiesRepository = citiesRepository;
    }
    async create(createCityDto) {
        const city = this.citiesRepository.create(createCityDto);
        return await this.citiesRepository.save(city);
    }
    async findAll() {
        return await this.citiesRepository.find();
    }
    async findOne(id) {
        return await this.citiesRepository.findOne({
            where: { id },
        });
    }
    async update(id, updateCityDto) {
        const city = await this.findOne(id);
        if (!city) {
            throw new common_1.NotFoundException(`City with id ${id} not found`);
        }
        Object.assign(city, updateCityDto);
        return await this.citiesRepository.save(city);
    }
    async remove(id) {
        const city = await this.findOne(id);
        if (!city) {
            throw new common_1.NotFoundException(`City with id ${id} not found`);
        }
        return await this.citiesRepository.remove(city);
    }
};
exports.CitiesService = CitiesService;
exports.CitiesService = CitiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(city_entity_1.City)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CitiesService);
//# sourceMappingURL=cities.service.js.map