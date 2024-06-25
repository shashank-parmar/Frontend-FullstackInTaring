import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { text: 'Learn Javascript', completed: false },
    { text: 'Learn React', completed: false },
    { text: 'Build a React App', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All');

  const handleAddTask = (e) => {
    if (e.key === 'Enter' && newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  const remainingTasks = tasks.filter(task => !task.completed).length;

  return (
    <div className="container">
      <h1>THINGS TO DO</h1>
      <input 
        type="text" 
        placeholder="Add New" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        onKeyDown={handleAddTask}
      />
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => handleToggleTask(index)}
            />
            {task.text}
            <button onClick={() => handleDeleteTask(index)}>X</button>
          </li>
        ))}
      </ul>
      <div className="footer">
        <span>{remainingTasks} items left</span>
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange('Active')}>Active</button>
        <button onClick={() => handleFilterChange('Completed')}>Completed</button>
      </div>
    </div>
  );
}

export default App;
