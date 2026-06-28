// Purpose: Configure and export the Express application.

const express = require("express");
const cors = require("cors");

const app = express();

/*
 Purpose:
 Enable Cross-Origin Resource Sharing (CORS).

 Why:
 Allows the React frontend to communicate with the backend,
 even when they run on different ports during development.
*/
app.use(cors());

/*
 Purpose:
 Parse incoming JSON request bodies.

 Input:
 JSON sent by the client.

 Output:
 Makes the parsed data available as req.body.
*/
app.use(express.json());

/*
 Purpose:
 Health check endpoint.

 Why:
 Used to verify that the backend server is running correctly.
*/
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Task Tracker API is running..."
  });
});

module.exports = app;