import React from 'react';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ul className='content'>
      {tasks.map((task, index) => (
        <li key={index}>
          <span className={ task.completed ? 'completed' : '' }>{task.text}</span>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(index)}
          />
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
