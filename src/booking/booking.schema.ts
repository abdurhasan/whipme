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