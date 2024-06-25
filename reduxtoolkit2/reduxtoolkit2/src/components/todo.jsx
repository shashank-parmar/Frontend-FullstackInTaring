// import React from 'react'

import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todo() { 
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div>todo</div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}> delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
