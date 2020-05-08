import * as mongoose from 'mongoose';
const { Schema } = mongoose

const eventSubSchema = Schema({
    status: String,
    time: Number
}, { _id: false })

export const BookingSchema = new Schema({

    date: {
        type: String,
        required: true
    },
    branch: {
        type: mongoose.Types.ObjectId,
        ref : 'Branch',
        required: true
    },
    invoiceNumber: {
        type: String,
        required: true,
        unique: true
    },
    technicians: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ],
    car: {
        type: mongoose.Types.ObjectId,
        ref: 'User.cars',
        required: true
    },
    driver: {
        type: mongoose.Types.ObjectId,
        ref: 'User'

    },
    events: [eventSubSchema]
}, { timestamps: true })

// {  
//     "_id": "5eaf0cca6d14848asdas34as",
//     "date": "04-05-2020", 
//     "branch": "5eadf9437b083568e9ffb778", //REFERS TO Branch
//     "invoiceNumber": "INV5EAF0CCA6D14848ASDAS34AS",
//     "carOwner": "5eaf0cca6d148487de7f243f", ///REFERS TO USER
//     "driver": "5sjhajkdhu34kjhajsd",  //REFERS TO user
//     "car": "5eaf0cca6d14848al323jk", //REFERS TO USER.CAR
//     "technicians": [
//         "5eaf0cca6d1pas234lk",
//         "5eaf0cca6d14laskjdo3k"
//     ],
//     "events": [
//         {
//             "status": "ORDERED",
//             "time": 1588543922488
//         }
//     ]

// }