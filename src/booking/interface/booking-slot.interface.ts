import { UserCarOwned } from '../../user/interface/user-cars.interface'

export interface BookingSlot {
    invoiceNumber: string;
    carOwner: string;
    car: UserCarOwned;
    technicians: string[];
    start: number;
    end: number
}


// {
//     "_id": "5eaf0cca6d14848asdas34as",
//     "invoiceNumber": "INV5EAF0CCA6D14848ASDAS34AS",
//     "car_owner": "5eaf0cca6d148487de7f243f",
//     "car": {
//         "numberPlate": "X-28012ANNN",
//         "color": "red",
//         "detail": "5ead78c01d42c331221fe689"
//     },
//     "technicians": [
//         "5eaf0cca6d1pas234lk",
//         "5eaf0cca6d14laskjdo3k"
//     ],
//     "start": 1588532918587,
//     "end": null
// }