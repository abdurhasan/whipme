import * as mongoose from 'mongoose';
import { AuthRole } from '../auth/auth-role.enum';
import { encrypt } from 'src/helper/encryption-helper';

const detailSubSchema = mongoose.Schema({
    field: String,
    value: String,
}, { _id: false });

const carSubSchema = mongoose.Schema({
    numberPlate: {
        type: String,
        unique: true
    },
    color: String,
    detail: {
        type: mongoose.Types.ObjectId,
        ref: 'Car'
    }
}, { _id: true });


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
    fullName: {
        type: String,        
        required: true
    },
    phone: {
        type: String,        
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
    detail: [detailSubSchema],
    cars: [carSubSchema]
}, { timestamps: true });



UserSchema.pre('save', function (next) {
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

