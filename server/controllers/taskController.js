/**
 * Purpose:
 * Handles all task-related business logic.
 *
 * Current Functionality:
 * - Create a new task
 */

const Task = require("../models/Task");

/**
 * Create a new task
 *
 * Purpose:
 * Creates and stores a new task in MongoDB.
 *
 * Input:
 * req.body
 * {
 *   title,
 *   description,
 *   status,
 *   priority,
 *   dueDate
 * }
 *
 * Output:
 * 201 - Task created successfully
 * 400 - Validation error
 * 500 - Internal server error
 */
const createTask = async (req, res) => {
    try {
        // Create a new task using request body
        const task = await Task.create(req.body);

        return res.status(201).json({
            success: true,
            message: "Task created successfully.",
            data: task,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createTask,
};