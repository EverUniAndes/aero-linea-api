/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AeropuertoEntity } from './aeropuerto.entity/aeropuerto.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class AeropuertoService {
    constructor(
        @InjectRepository(AeropuertoEntity)
        private readonly aeropuertoRepository: Repository<AeropuertoEntity>,
    ){}

    async findAll(): Promise<AeropuertoEntity[]> {
        return await this.aeropuertoRepository.find({ relations: ['aerolineas'] });
    }

    async findOne(id: string): Promise<AeropuertoEntity> {
        const aeropuerto: AeropuertoEntity | null = await this.aeropuertoRepository.findOne({where: {id}, relations: ["aerolineas"] } );
       
        if (!aeropuerto)
         throw new BusinessLogicException("La aeropuerto no existe", BusinessError.NOT_FOUND);
  
       return aeropuerto;
    }

     async create(aeropuerto: AeropuertoEntity): Promise<AeropuertoEntity> {
       return await this.aeropuertoRepository.save(aeropuerto);
   }

     async update(id: string, aeropuerto: AeropuertoEntity): Promise<AeropuertoEntity> {
       const aeropuertoExistente: AeropuertoEntity | null = await this.aeropuertoRepository.findOne({where:{id}});
       if (!aeropuertoExistente)
         throw new BusinessLogicException("La aeropuerto no existe", BusinessError.NOT_FOUND);
       
       return await this.aeropuertoRepository.save({...aeropuertoExistente, ...aeropuerto});
   }

    async delete(id: string) {
        const aeropuerto: AeropuertoEntity | null = await this.aeropuertoRepository.findOne({where:{id}});
        if (!aeropuerto)
            throw new BusinessLogicException("La aeropuerto no existe", BusinessError.NOT_FOUND);
        
        await this.aeropuertoRepository.remove(aeropuerto);
    }    

}
