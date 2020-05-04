import { BookingEvent } from "../interface/booking-event.interface";


export class Booking {
    date: string;     // day - month - year
    branch: string;     // branchId
    invoiceNumber: string;
    carOwner: string;
    technicians: string[];
    car:string;
    driver : string;
    events: BookingEvent[]
}


// {
//     "date": "04-05-2020", 
//     "branch": "5eadf9437b083568e9ffb778", 
//     "invoiceNumber": "INV5EAF0CCA6D14848ASDAS34AS",
//     "carOwner": "5eaf0cca6d148487de7f243f", 
//     "driver": "5sjhajkdhu34kjhajsd",  
//     "car": "5eaf0cca6d14848al323jk", 
//     "technicians": [
//         "5eaf0cca6d1pas234lk",
//         "5eaf0cca6d14laskjdo3k"
//     ],
//     "start": 1588532918587,
//     "end": null,
//     "events": [
//         {
//             "status": "ORDERED",
//             "time": 1588543922488
//         }
//     ]
// }
