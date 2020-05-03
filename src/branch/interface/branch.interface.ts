import { Technician } from "./branch-technicians.interface";

export interface Branch {
    name: string;
    address: string;
    phone: string;
    technicians: Technician[];
    startWorkingHour:number;
    endWorkingHour:number;
}