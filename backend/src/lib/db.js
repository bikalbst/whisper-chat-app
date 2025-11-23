import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const { MONGODB_URI } = process.env;
        if (!MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }
        const conn = await mongoose.connect(MONGODB_URI);
        console.log("Connected to MongoDB:", conn.connection.host);
    } catch (error) {
        console.error("Error connectin to MongoDB:", error);
        process.exit(1);

    }
}