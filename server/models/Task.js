/**
 * Purpose:
 * Defines the Task schema and model.
 *
 * Input:
 * Task data received from the application.
 *
 * Output:
 * A validated MongoDB document.
 */

const mongoose = require("mongoose");

/**
 * Task Schema
 *
 * Defines the structure and validation rules
 * for every task stored in MongoDB.
 */
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    description: {
      type: String,
      trim: true,
      default: "",
      maxlength: [500, "Description cannot exceed 500 characters"],
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Task Model
 *
 * Represents the "tasks" collection in MongoDB.
 */
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;