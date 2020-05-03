import * as mongoose from 'mongoose';


export const BookingSchema = new mongoose.Schema({

    date: String,
    branch: String,
    start: Number, // Unix timestamp , independent local zone
    end: Number,
    slot: Number,
    technicians: [
        {
            userId: {
                type: mongoose.Types.Objectid,
                ref: 'User'
            },
            name: String,
            phone: String
        }
    ],
    car: {
        carId: mongoose.Types.Objectid,
        numberPlate: String
    }
}, { timestamps: true })

// {
//     "date": "04-05-2020",
//     "branch": "5eadf9437b083568e9ffb778",
//     "slot": [
//         {
//             "_id": "5eaf0cca6d14848asdas34as",
//             "car_owner": "5eaf0cca6d148487de7f243f",
//             "car": {
//                 "numberPlate": "X-28012ANNN",
//                 "color": "red",
//                 "detail": "5ead78c01d42c331221fe689"
//             },
//             "technicians": [
//                 "5eaf0cca6d1pas234lk",
//                 "5eaf0cca6d14laskjdo3k"
//             ],
//             "start": 1588532918587,
//             "end": null
//         }
//     ]
// }