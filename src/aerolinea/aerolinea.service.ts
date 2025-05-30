/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { AerolineaEntity } from './aerolinea.entity/aerolinea.entity';

@Injectable()
export class AerolineaService {
    constructor(
        @InjectRepository(AerolineaEntity)
        private readonly aerolineaRepository: Repository<AerolineaEntity>,        
    ) {}

    async findAll(): Promise<AerolineaEntity[]> {
        return await this.aerolineaRepository.find({ relations: ['aeropuertos'] });
    }

    async findOne(id: string): Promise<AerolineaEntity> {
        const aerolinea: AerolineaEntity | null = await this.aerolineaRepository.findOne({where: {id}, relations: ["aeropuertos"] } );
       
        if (!aerolinea)
         throw new BusinessLogicException("La aerolinea no existe", BusinessError.NOT_FOUND);
  
       return aerolinea;
    }

     async create(aerolinea: AerolineaEntity): Promise<AerolineaEntity> {
       return await this.aerolineaRepository.save(aerolinea);
   }

     async update(id: string, aerolinea: AerolineaEntity): Promise<AerolineaEntity> {
       const aerolineaExistente: AerolineaEntity | null = await this.aerolineaRepository.findOne({where:{id}});
       if (!aerolineaExistente)
         throw new BusinessLogicException("La aerolinea no existe", BusinessError.NOT_FOUND);
       
       return await this.aerolineaRepository.save({...aerolineaExistente, ...aerolinea});
   }

    async delete(id: string) {
        const aerolinea: AerolineaEntity | null = await this.aerolineaRepository.findOne({where:{id}});
        if (!aerolinea)
            throw new BusinessLogicException("La aerolinea no existe", BusinessError.NOT_FOUND);
        
        await this.aerolineaRepository.remove(aerolinea);
    }

}
