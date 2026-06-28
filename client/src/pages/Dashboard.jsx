import { useEffect, useState } from "react";

import "../styles/dashboard.css";

import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

import {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
} from "../services/taskService";

function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    /**
     * Fetch all tasks
     */
    const fetchTasks = async () => {
        try {
            const response = await getTasks();
            setTasks(response.data.data);
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
        }
    };

    /**
     * Create or Update Task
     */
    const handleSubmitTask = async (task) => {
        try {
            if (editingTask) {
                await updateTask(editingTask._id, task);
                setEditingTask(null);
            } else {
                await createTask(task);
            }

            await fetchTasks();

        } catch (error) {
            console.error("Operation failed:", error);
        }
    };

    /**
     * Delete Task
     */
    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);
            await fetchTasks();
        } catch (error) {
            console.error("Delete failed:", error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
    <div className="dashboard">
            <h1>Task Tracker Dashboard</h1>

            <TaskForm
                onSubmit={handleSubmitTask}
                editingTask={editingTask}
            />

            <hr />

            <h2>Total Tasks: {tasks.length}</h2>

            {tasks.map((task) => (
                <TaskCard
                    key={task._id}
                    task={task}
                    onDelete={handleDeleteTask}
                    onEdit={setEditingTask}
                />
            ))}
        </div>
    );
}

export default Dashboard;