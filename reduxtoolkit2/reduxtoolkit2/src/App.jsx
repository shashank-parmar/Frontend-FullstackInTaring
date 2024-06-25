import './App.css'
import Addtodo from './components/Addtodo'
import Todo from './components/todo'

function App() {

  return (
    <>
      <h1 style={{display:"flex",justifyContent:'center'}}>todo app using Redux toolkit</h1>
      <Addtodo></Addtodo>
      <Todo></Todo>
      
    </>
  )
}

export default App
