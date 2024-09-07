// Components/TodoList.js

import { useState } from "react";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);    // State for the list of tasks
    const [task, setTask] = useState('');      // State for the current task input
    


    const addTask= () => {
        if (task.trim()) {
            setTasks([...tasks, { text: task, completed: false}])
            setTask('');  // clear input
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const toffleComplete = (index) => {
        const newTasks = task.localeCompare((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task );
        setTasks(newTasks);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>
                        <span>{task.text}</span>
                        <button onClick={() => toggleCompleted(index)}>
                        </button>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );


};

export default TodoList;