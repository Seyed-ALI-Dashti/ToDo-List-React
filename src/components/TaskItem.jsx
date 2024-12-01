function TaskItem({task, deleteTask}) {
    return (
        <li className="TaskItem">
            <span>{task.text}</span>
            <button onClick={()=> deleteTask(task.id)} className="deleteTask">Delete</button>
        </li>
    )
}

export default TaskItem;