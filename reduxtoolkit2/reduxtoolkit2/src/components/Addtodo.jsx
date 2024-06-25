// import React from 'react'
import { useState } from "react"
import { useDispatch } from "react-redux"
import {addTodo} from "../features/todo//todoSlice.js"
import './Addtodo.css'

export default function Addtodo() {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler =(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <>
        <form onSubmit={addTodoHandler} className="todo-form">
            <input type="text" placeholder="enter todo" value={input} onChange={(e)=>setInput(e.target.value)} required></input>
            <button type="submit">Add todo</button>
        </form>
    </>
  )
}
