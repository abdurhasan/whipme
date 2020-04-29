"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const auth_role_enum_1 = require("./auth-role.enum");
exports.UserSchema = new mongoose.Schema({
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
        enum: Object.values(auth_role_enum_1.AuthRole),
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
});
//# sourceMappingURL=user.schema.js.map