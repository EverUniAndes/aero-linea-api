/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
export class AeropuertoDto {
    @IsString()
    @IsNotEmpty()
    readonly id: string;
    @IsString()
    @IsNotEmpty()        
    readonly nombre: string;
    @IsString()
    @IsNotEmpty()         
    readonly pais: string;
    @IsString()
    @IsNotEmpty()         
    readonly ciudad: string;

}
