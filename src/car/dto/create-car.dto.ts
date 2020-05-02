import { IsNotEmpty, IsNumber } from 'class-validator';


export class CreateCarDto {    
    @IsNotEmpty()
    brand: string;
    @IsNotEmpty()
    model: string;
    @IsNotEmpty()
    @IsNumber()
    year: number;
    @IsNotEmpty()
    type: string;    
}
