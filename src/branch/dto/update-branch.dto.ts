import { IsEmpty, IsOptional } from 'class-validator';
import { Technician } from '../interface/branch-technicians.interface';


export class UpdateBranchDto {
    @IsEmpty({ message: 'you cannot change the id' })
    _id: string;
    @IsOptional()
    name: string;
    @IsOptional()
    address: string;
    @IsOptional()
    phone: string;
    @IsOptional()
    technicians: Technician[];
    @IsOptional()
    startWorkingHour: number;
    @IsOptional()
    endWorkingHour: number;
}
