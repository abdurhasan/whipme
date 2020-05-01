import { IsNotEmpty, IsNumber } from 'class-validator';


export class CreateCarDto {
    _id: string;
    @IsNotEmpty()
    brand: string;
    @IsNotEmpty()
    model: string;
    @IsNotEmpty()
    @IsNumber()
    year: number;
    @IsNotEmpty()
    type: string;
    @IsNotEmpty()
    color: string;
}
