import axios from "axios";

/**
 * Axios instance
 * Base URL for all backend API requests.
 */
const api = axios.create({
    baseURL: "http://localhost:5001/api",
});

/**
 * Fetch all tasks
 */
export const getTasks = async () => {
    return await api.get("/tasks");
};

export const createTask = async (task) => {
    return await api.post("/tasks", task);
};
export const deleteTask = async (id) => {
    return await api.delete(`/tasks/${id}`);
};
export const updateTask = async (id, task) => {
    return await api.put(`/tasks/${id}`, task);
};

export default api;