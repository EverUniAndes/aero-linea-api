/* eslint-disable prettier/prettier */
import {IsDate, IsNotEmpty, IsString } from 'class-validator';
export class AerolineaDto {
    
    @IsString()
    @IsNotEmpty()
    readonly id: string;
    @IsString()
    @IsNotEmpty()        
    readonly nombre: string;
    @IsString()
    @IsNotEmpty()         
    readonly descripcion: string;
    @IsDate()
    @IsNotEmpty()
    readonly fechafundacion: Date;
    @IsString()
    @IsNotEmpty()      
    readonly paginaweb: string;
}
