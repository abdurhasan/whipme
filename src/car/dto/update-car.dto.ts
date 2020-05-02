import { IsEmpty, IsOptional} from 'class-validator';


export class UpdateCarDto {
    @IsEmpty({ message: 'you cannot change the id' })
    _id: string;
    @IsOptional()
    brand: string;
    @IsOptional()
    model: string;
    @IsOptional()
    year: number;
    @IsOptional()
    type: string;    
}
