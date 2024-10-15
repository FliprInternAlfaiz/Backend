const mongoose = require("mongoose")

const orderItemSchema = new mongoose.Schema({
    ProductId:{
        type:String,
        required:true
    },
    quantity:{
        type:Number
    }
})

const orderSchema= new mongoose.Schema({
    orderName:{
        type:String,
        required:true
    },
    customer:{  
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItem:{
        type:[orderItemSchema]
    },
    address:{
        type:String
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"

    }
},{timestamps:true})


export const Order = mongoose.model("Order",orderSchema)