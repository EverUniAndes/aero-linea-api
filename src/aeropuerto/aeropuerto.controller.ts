/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';
import { AeropuertoService } from './aeropuerto.service';
import { AeropuertoDto } from './aeropuerto.dto/aeropuerto.dto';
import { AeropuertoEntity } from './aeropuerto.entity/aeropuerto.entity';
import { plainToInstance } from 'class-transformer';

@Controller('aeropuerto')
@UseInterceptors(BusinessErrorsInterceptor)
export class AeropuertoController {
    constructor(private readonly aeropuertoServicio: AeropuertoService) {}

    @Get()
    async findAll() {
        return await this.aeropuertoServicio.findAll();
    }
    
    @Get(':aeropuertoId')
    async findOne(@Param('aeropuertoId') aeropuertoId: string) {
        return await this.aeropuertoServicio.findOne(aeropuertoId);
    }
    
    @Post()
    async create(@Body() aeropuertoDto: AeropuertoDto) {
        const aeropuerto = plainToInstance(AeropuertoEntity, aeropuertoDto);
        return await this.aeropuertoServicio.create(aeropuerto);
    }
    
    @Put(':aeropuertoId')
    async update(@Param('aeropuertoId') aeropuertoId: string, @Body() aeropuertoDto: AeropuertoDto) {
        const aeropuerto = plainToInstance(AeropuertoEntity, aeropuertoDto);
        return await this.aeropuertoServicio.update(aeropuertoId, aeropuerto);
    }
    
    @Delete(':aeropuertoId')
    @HttpCode(204)
    async delete(@Param('aeropuertoId') aerolineaId: string) {
        return await this.aeropuertoServicio.delete(aerolineaId);
    }
}
