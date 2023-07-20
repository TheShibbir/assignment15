import { useState } from "react";

const TodoListApp = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();

    if (task.trim() !== '') {
      setTaskList((prevTaskList) => [...prevTaskList, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTaskList((prevTaskList) => prevTaskList.filter((_, i) => i !== index));
  };

  return (
    <div className="toDocontainer">
      <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input type="text" value={task} onChange={handleTaskChange} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
                   
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TodoListApp;
