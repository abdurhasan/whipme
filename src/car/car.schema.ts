import * as mongoose from 'mongoose';
import { AuthRole } from '../auth/auth-role.enum';



export const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    userName: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: Object.values(AuthRole),
        required: true
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    detail: {
        type: Array,
        default: []
    }
}, { timestamps: true });

