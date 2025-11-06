import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        // Use the exact same connection string as MongoDB Compass
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            // Remove all deprecated options - they cause issues in newer versions
        });

        console.log(`✅ Connected to MongoDB: ${conn.connection.host}`);
        console.log(`✅ Database: ${conn.connection.name}`);
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
        process.exit(1);
    }
};

export { connectDB };