import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = text => {
    const newTask = {
      text: text,
      completed: false
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const toggleComplete = index => {
    setTasks(prevTasks => {
      return prevTasks.map((task, i) => {
        if (i === index) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  };

  const deleteTask = index => {
    setTasks(prevTasks => {
      return prevTasks.filter((task, i) => i !== index);
    });
  };

  return (
    <div className='container'>
      <div className='content'>
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
