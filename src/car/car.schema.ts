import * as mongoose from 'mongoose';
const { Schema } = mongoose


export const CarSchema = new Schema({
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
        default: false
    }
}, { timestamps: true });