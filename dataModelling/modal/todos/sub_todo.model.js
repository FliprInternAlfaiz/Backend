const mongoose = require("mongoose")

const subTodoSchema = new mongoose.Schema({
    contain:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const SubTodo = mongoose.model("SubTodo",subTodoSchema);