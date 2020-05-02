import { IsNotEmpty } from "class-validator";

export class AssignCarDto {
    @IsNotEmpty()
    numberPlate: string;
    @IsNotEmpty()
    carId: string;
    @IsNotEmpty()
    color: number;
}
