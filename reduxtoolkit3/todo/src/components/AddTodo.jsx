// import React from 'react'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTodo } from "../slices/todoSlice"

export default function AddTodo() {
    const [input ,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    
  return (
    <div>
        <form onSubmit={addTodoHandler}>
            <input type="text" placeholder="enter your todo" value={input} onChange={(e)=>setInput(e.target.value)} required></input>
            <button type="submit">Add todo</button>
        </form>
    </div>
  )
}
