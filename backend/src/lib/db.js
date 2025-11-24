import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {
    try {
        const { MONGODB_URI } = ENV;
        if (!MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }
        const conn = await mongoose.connect(ENV.MONGODB_URI);
        console.log("Connected to MongoDB:", conn.connection.host);
    } catch (error) {
        console.error("Error connectin to MongoDB:", error);
        process.exit(1);

    }
}