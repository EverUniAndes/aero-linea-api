/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';
import { AerolineaService } from './aerolinea.service';
import { AerolineaDto } from './aerolinea.dto/aerolinea.dto';
import { plainToInstance } from 'class-transformer';
import { AerolineaEntity } from './aerolinea.entity/aerolinea.entity';

@UseInterceptors(BusinessErrorsInterceptor)
@Controller('aerolinea')
export class AerolineaController {
    constructor(private readonly aerolineaServicio: AerolineaService) {}

    @Get()
    async findAll() {
    return await this.aerolineaServicio.findAll();
    }

    @Get(':aerolineaId')
    async findOne(@Param('aerolineaId') aerolineaId: string) {
    return await this.aerolineaServicio.findOne(aerolineaId);
    }

    @Post()
    async create(@Body() aerolineaDto: AerolineaDto) {
        const aerolinea = plainToInstance(AerolineaEntity, aerolineaDto) as AerolineaEntity;
        return await this.aerolineaServicio.create(aerolinea);
    }

    @Put(':aerolineaId')
    async update(@Param('aerolineaId') aerolineaId: string, @Body() aerolineaDto: AerolineaDto) {
        const aerolinea = plainToInstance(AerolineaEntity, aerolineaDto) as AerolineaEntity;
        return await this.aerolineaServicio.update(aerolineaId, aerolinea);
    }

    @Delete(':aerolineaId')
    @HttpCode(204)
    async delete(@Param('aerolineaId') aerolineaId: string) {
        return await this.aerolineaServicio.delete(aerolineaId);
    }

}


