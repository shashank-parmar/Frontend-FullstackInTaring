import React, { useState } from 'react';

const Todo = ({ todo, toggleComplete, removeTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleUpdate = () => {
    updateTodo(todo.id, newTask);
    setIsEditing(false);
  };

  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          {todo.task}
          <button onClick={() => toggleComplete(todo.id)}>Complete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </>
      )}
    </div>
  );
};

export default Todo;
