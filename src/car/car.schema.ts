import * as mongoose from 'mongoose';


export const CarSchema = new mongoose.Schema({
    // _id: {
    //     type: String,
    //     required: true,
    //     unique:true
    // },
    type: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },    
    isDelete: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });