import { IsEmpty, IsOptional } from 'class-validator';



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
    technicians: string[];
    @IsOptional()
    startWorkingHour: number;
    @IsOptional()
    endWorkingHour: number;
}
