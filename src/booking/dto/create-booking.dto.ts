import { IsNotEmpty } from "class-validator";
import { BookingEvent } from "../interface/booking-event.interface";
import { IsBookingDate } from "src/helper/pipe-helper";



export class CreateBookingDto {
    @IsNotEmpty()
    @IsBookingDate({
        message: 'Date must be in format DD-MM-YYYY or DD/MM/YYYY'
    })
    date: string;     // day - month - year
    @IsNotEmpty()
    branch: string;     // branchId

    invoiceNumber: string;  // GS
    @IsNotEmpty()
    carOwner: string;

    technicians: string[];
    @IsNotEmpty()
    car: string;

    driver: string;  // GS
    events: BookingEvent[] // GS 
}

// * GS  : Generated by System