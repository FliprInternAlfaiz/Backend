const dotenv = require("dotenv");
const { connectDB } = require("./db");
const express = require("express");

const app = express();


dotenv.config({
    path:'/.env'
})

connectDB().then(()=>{
    app.listen(process.env.PORT || 8080,()=>{
        console.log(`Server is listen on the PORT ${process.env.PORT}`)
    })
}).catch((error)=>{
    console.log(`DB CONNECTION ERROR :-`,error)
})
