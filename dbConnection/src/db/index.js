const mongoose = require("mongoose");
const { DB_NAME } = require("../constant");

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`DATABASE CONNECTED ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`DB CONNECTION ERROR :-`,error)
        process.exit(1)
    }
}


export {connectDB};