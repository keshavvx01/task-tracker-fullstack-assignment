import { useEffect, useState } from "react";

/**
 * Purpose:
 * Reusable form for creating and editing tasks.
 *
 * Props:
 * onSubmit
 * editingTask
 */
function TaskForm({ onSubmit, editingTask }) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "Pending",
        priority: "Medium",
        dueDate: "",
    });

    /**
     * Populate form when editing
     */
    useEffect(() => {
        if (editingTask) {
            setFormData({
                title: editingTask.title || "",
                description: editingTask.description || "",
                status: editingTask.status || "Pending",
                priority: editingTask.priority || "Medium",
                dueDate: editingTask.dueDate
                    ? editingTask.dueDate.substring(0, 10)
                    : "",
            });
        }
    }, [editingTask]);

    /**
     * Update input values
     */
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    /**
     * Submit form
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(formData);

        setFormData({
            title: "",
            description: "",
            status: "Pending",
            priority: "Medium",
            dueDate: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={formData.title}
                onChange={handleChange}
                required
            />

            <br /><br />

            <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
            />

            <br /><br />

            <select
                name="status"
                value={formData.status}
                onChange={handleChange}
            >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
            </select>

            <br /><br />

            <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
            >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>

            <br /><br />

            <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
            />

            <br /><br />

            <button type="submit">
                {editingTask ? "Update Task" : "Add Task"}
            </button>
        </form>
    );
}

export default TaskForm;