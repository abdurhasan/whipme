import { Technician } from "./branch-technicians.interface";

export interface Branch {
    name: string;
    address: string;
    contact: string;
    technicians: Technician[];
    startWorkingHour:number;
    endWorkingHour:number;
}