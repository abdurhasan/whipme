import { BookingSlot } from "./interface/booking-slot.interface";

export class BookingInterface {
    date: string;     // day - month - year
    branch: string;     // branchId
    slot: BookingSlot[]; // Unix timestamp , independent local zone

}
