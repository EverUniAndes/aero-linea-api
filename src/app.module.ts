/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AerolineaModule } from './aerolinea/aerolinea.module';
import { AerolineaEntity } from "src/aerolinea/aerolinea.entity/aerolinea.entity";
import { AeropuertoModule } from './aeropuerto/aeropuerto.module';
import { AeropuertoEntity } from "src/aeropuerto/aeropuerto.entity/aeropuerto.entity";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AerolineaModule, AeropuertoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mi_base',
      database: 'db_aerolinea',
      entities: [AerolineaEntity, AeropuertoEntity],
      dropSchema: true,
      synchronize: true
   }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
