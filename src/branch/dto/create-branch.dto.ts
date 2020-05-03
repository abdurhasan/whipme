import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Technician } from '../interface/branch-technicians.interface';


export class CreateBranchDto {
    @IsNotEmpty()
    name: string;
    @IsOptional()
    address: string;
    @IsOptional()
    contact: string;
    @IsOptional()
    technicians: Technician[];
    @IsOptional()
    @IsNumber()
    startWorkingHour: number;
    @IsOptional()
    @IsNumber()
    endWorkingHour: number;
}
