const mongoose = require("mongoose")
const { Schema } = require("mongoose")
const aggregatePaginate =require('mongoose-aggregate-paginate-v2');

const VideoSchema = new Schema(
    {
        videoFile:{
            type:String,
            required:true
        },
        thumbnail:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            required:true
        },
        views:{
            type:Number,
            default:0
        },
        isPublished :{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
           ref: "User"
        }
    },
    {timestamps:true}
)


VideoSchema.plugin(aggregatePaginate);

export const Video = mongoose.model("Video",VideoSchema);