import dotenv from 'dotenv';
import mongoose from 'mongoose';
import DB_NAME from '../constant.js';

dotenv.config(); 

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`DATABASE CONNECTED: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`DB CONNECTION ERROR:`, error.message); 
        process.exit(1);
    }
};

export { connectDB };
