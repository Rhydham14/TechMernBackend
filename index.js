import express from 'express';
import { connectDB } from './config/database.js';
import signupRoute from './routes/signup.Route.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database first, then start server
const startServer = async () => {
    try {
        console.log('🔄 Connecting to MongoDB...');
        await connectDB();

        app.use('/api', signupRoute);

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

startServer();

export default app;