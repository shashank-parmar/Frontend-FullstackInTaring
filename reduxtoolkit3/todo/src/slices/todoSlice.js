import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid"; 

const initialState = {
    todos: []
};
export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),  
                text: action.payload,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;  
            const existingTodo = state.todos.find((todo) => todo.id === id);
            if (existingTodo) {
                existingTodo.text = text;
            }
        }
    }
});
export const { addTodo, removeTodo, updateTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
