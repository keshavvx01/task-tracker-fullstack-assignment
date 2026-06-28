/**
 * Purpose:
 * Handles all task-related business logic.
 */

const Task = require("../models/Task");

/**
 * Create a new task
 */
const createTask = async (req, res) => {
    try {
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

/**
 * Get all tasks
 */
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

/**
 * Get a task by ID
 */
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: task,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
};