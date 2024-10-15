const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
    },
    password: {
        type: String,
        required: [true,"Password is Required"],
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);