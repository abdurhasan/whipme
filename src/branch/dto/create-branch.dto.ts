import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Technician } from '../interface/branch-technicians.interface';


export class CreateBranchDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    address: string;
    @IsNotEmpty()
    phone: string;    
    technicians: Technician[];
    @IsNumber()
    startWorkingHour: number;
    @IsNumber()
    endWorkingHour: number;
}
