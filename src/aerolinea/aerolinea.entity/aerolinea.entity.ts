/* eslint-disable prettier/prettier */
import { AeropuertoEntity } from "src/aeropuerto/aeropuerto.entity/aeropuerto.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AerolineaEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    nombre: string;
    @Column()
    descripcion: string;
    @Column()
    fechafundacion: Date;
    @Column()
    paginaweb: string;

    @ManyToMany(() => AeropuertoEntity, (aeropuerto) => aeropuerto.id)
    aeropuertos: AeropuertoEntity[];

}
