import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';



export class CreateBranchDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    address: string;
    @IsNotEmpty()
    phone: string;    
    technicians: string[];
    @IsNumber()
    startWorkingHour: number;
    @IsNumber()
    endWorkingHour: number;
}
