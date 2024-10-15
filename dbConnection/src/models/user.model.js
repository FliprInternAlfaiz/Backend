const mongoose = require("mongoose")
const { Schema } = require("mongoose")
const bcrypt = require("bcrypt")


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


UserSchema.pre("save", async function(next) {

    if (!this.isModified("password")) return next(); 

    this.password = await bcrypt.hash(this.password, 10);
    next(); 
});

UserSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password); 
};



export const User = mongoose.model("User",UserSchema);