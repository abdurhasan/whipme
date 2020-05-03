import { IsNotEmpty } from "class-validator";
import { Car } from "src/car/car.interface";

export class AssignCarDto {
    @IsNotEmpty()
    numberPlate: string;
    @IsNotEmpty()
    color: number;
    @IsNotEmpty()
    detail: Car;
}
