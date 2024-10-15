const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avtar: {
            type: String,
            required: true
        },
        coverImage: {
            type: String,
            required: true
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ]
    },
    {
        timestamps: true
    }
)


export const User = mongoose.model("User",UserSchema);