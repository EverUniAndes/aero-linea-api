/* eslint-disable prettier/prettier */
import { AerolineaEntity } from "src/aerolinea/aerolinea.entity/aerolinea.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AeropuertoEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    nombre: string;
    @Column()
    pais: string
    @Column()
    ciudad: string;

    @ManyToMany(() => AerolineaEntity, (aerolinea) => aerolinea.id)
    aerolineas: AerolineaEntity[];
}
