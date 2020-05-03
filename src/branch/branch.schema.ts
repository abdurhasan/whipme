import * as mongoose from 'mongoose';


export const BranchSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    address: String,
    contact: String,
    technicians: [
        {
            name: String,
            userId: mongoose.Types.ObjectId,
            phone: String
        }
    ],
    startWorkingHour: Number,
    endWorkingHour: Number,
    isDelete: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });