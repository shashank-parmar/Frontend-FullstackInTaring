import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {        
  const [form,setForm] = useState({})

  const HandleForm =(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    })
    console.log({form})
  }

  const HandleSubmit= async(e)=>{
    e.preventDefault()
    const res = await fetch('http://localhost:3000/demo',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const result = await res.text()
    console.log(res)
    console.log(result)
  }

  return (
    <>
      <form onSubmit={HandleSubmit}>
      {/* <p>{JSON.stringify(form)}</p> */}
          <span>username</span>
          <input type='text' name='username' onChange={HandleForm}></input>
          <br></br>
          <span>password</span>
          <input type='text' name='password' onChange={HandleForm}></input>
          <button type='submit' >submit</button>
      </form>
    </>
  )
}

export default App
