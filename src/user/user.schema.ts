import * as mongoose from 'mongoose';
import { AuthRole } from '../auth/enum/auth-role.enum';
import { encrypt } from '../helper/encryption-helper';
import { User } from './interface/user.interface';
const { Schema } = mongoose

const detailSubSchema = Schema({
    field: String,
    value: String,
}, { _id: false });

const carSubSchema = Schema({
    numberPlate: String,
    color: String,
    detail: {
        type: mongoose.Types.ObjectId,
        ref: 'Car'
    }
}, { _id: false });


export const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        unique: true,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    phone: {
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
    detail: [detailSubSchema],
    cars: {
        type: [carSubSchema],
        default: [],
        required: false
    }
}, { timestamps: true });



UserSchema.pre<User>('save', function (next) {
    let { password, role } = this

    try {
        if (password) {
            this.password = encrypt(password)

        }
        if (role) {
            this.role = encrypt(role)
        }
        return next()
    } catch (error) {
        return next(error)
    }

});

