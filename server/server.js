/**
 * Purpose:
 * Entry point of the application.
 *
 * Responsibilities:
 * - Load environment variables.
 * - Connect to MongoDB.
 * - Start the Express server.
 */

require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

/**
 * Start the application.
 */
const startServer = async () => {
    try {
        // Connect to MongoDB first
        await connectDB();

        // Start Express server
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ Server startup failed:", error.message);
        process.exit(1);
    }
};

startServer();