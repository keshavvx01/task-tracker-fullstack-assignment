/**
 * Purpose:
 * Establish a connection to the MongoDB database.
 *
 * Input:
 * Reads the MongoDB connection string from process.env.MONGO_URI.
 *
 * Output:
 * Connects the application to MongoDB.
 */

const mongoose = require("mongoose");

/**
 * Connect to MongoDB Atlas.
 *
 * Throws:
 * Exits the application if the database connection fails.
 */
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);

        console.log(`✅ MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Failed: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;