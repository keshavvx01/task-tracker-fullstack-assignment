/**
 * Purpose:
 * Entry point of the application.
 *
 * Responsibilities:
 * - Load environment variables.
 * - Import the Express application.
 * - Start the HTTP server.
 */

require("dotenv").config();

const app = require("./app");

// Server Port
const PORT = process.env.PORT || 5000;

/**
 * Purpose:
 * Start the Express server.
 *
 * Input:
 * PORT number.
 *
 * Output:
 * Starts the backend application.
 */
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});