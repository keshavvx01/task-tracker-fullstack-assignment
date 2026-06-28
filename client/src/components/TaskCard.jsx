import "../styles/taskCard.css";

/**
 * Displays a single task.
 */
function TaskCard({ task, onDelete, onEdit }) {
    return (
        <div className="task-card">
            <h2>{task.title}</h2>

            <p>{task.description}</p>

            <div className="task-meta">
                <span className="badge status">
                    {task.status}
                </span>

                <span className="badge priority">
                    {task.priority}
                </span>
            </div>

            <p>
                <strong>Due:</strong>{" "}
                {task.dueDate
                    ? new Date(task.dueDate).toLocaleDateString()
                    : "No due date"}
            </p>

            <div className="task-actions">
                <button
                    className="edit-btn"
                    onClick={() => onEdit(task)}
                >
                    Edit
                </button>

                <button
                    className="delete-btn"
                    onClick={() => onDelete(task._id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TaskCard;