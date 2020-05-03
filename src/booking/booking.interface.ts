import { Technician } from "src/branch/interface/branch-technicians.interface";
import { BookingCar } from "./interface/booking-car.interface";

export class BookingInterface {
    date: string;
    branch: string;
    start: number; // Unix timestamp , independent local zone
    end: number;
    slot: number;
    technicians: Technician[]
    car:BookingCar
}
