import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../slices/TodoSlice";

export default function Todo() {
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    const handleEdit = (id, text) => {
        setEditId(id);
        setEditText(text);
    };

    const handleUpdate = () => {
        if (editId && editText.trim()) {
            dispatch(updateTodo({
                id: editId,
                text: editText
            }));
            setEditId(null);
            setEditText("");
        }
    };

    return (
        <>
            <div>Todo</div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {editId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button type="button" onClick={handleUpdate}>Save</button>
                            </>
                        ) : (
                            <>
                                {todo.text}
                                <button type="button" onClick={() => handleEdit(todo.id, todo.text)}>Update</button>
                                <button type="button" onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
