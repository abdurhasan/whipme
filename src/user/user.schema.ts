import * as mongoose from 'mongoose';
import { AuthRole } from '../auth/auth-role.enum';
import { encrypt } from 'src/helper/encryption-helper';


export const UserSchema = new mongoose.Schema({
    // _id: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
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
    detail: [{
        field: String,
        type: String,
        value: String
    }],
    cars: [{
        numberPlate: {
            type: String,
            unique: true
        },
        carId: mongoose.Types.ObjectId,
        color: String
    }]
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

