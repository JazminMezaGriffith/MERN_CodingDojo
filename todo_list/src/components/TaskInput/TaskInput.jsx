import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e => {
    setTaskText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
      setErrorMessage('');
    } else {
      setErrorMessage("Task can't be empty");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='content'>
      <input
        className='taskInput'
        type="text"
        value={taskText}
        onChange={handleChange}
        placeholder="Enter task"
      />
      {errorMessage && <p className='error'>{errorMessage}</p>}
      <button type="submit" className='add'>Add</button>
    </form>
  );
};

export default TaskInput;
