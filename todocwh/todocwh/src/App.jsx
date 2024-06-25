import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos([...todos, { id:uuidv4(),todo, isComplated: false }]);
    setTodo("")
    console.log(todos)
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    console.log(id, 'iiiiiiiiii');
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    console.log(index, 'ddddddddddd');
    let newTodo = [...todos];
    newTodo[index].isCompleted = !newTodo[index].isCompleted;
    setTodos(newTodo);
  };

  const handleEdit = () => {

  };

  const handleDelete = (e,id) => {
    console.log(id)
    let newt = todos.filter((item)=>{
      return item.id !== id;
    })
    setTodos(newt)
    console.log(newt)
  };

  return (
    <>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[70vh]">
        <div>
          <h2 className="text-xl font-bold">Add todo</h2>
          <input
            type="text"
            className="w-80"
            onChange={handleChange}
            value={todo}
          ></input>
          <button
            type="submit"
            onClick={handleAdd}
            className="bg-violet-800 hover:bg-violet-950 p-3 py-1 mx-6 text-white rounded-md "
          >
            Add todo
          </button>
        </div>
        <h1 className="text-xl font-bold">your todo</h1>
        {todos.map((item,index) => {
            return <div key={index} className="todos">
            <div className=" todo flex ">
            <input
                name={item.id}
                id=""
                onChange={handleCheckbox}
                type="checkbox"
                checked={item.isCompleted}
              ></input>              <div className={`justify-between w-1/3 my-2 ${item.isCompleted ? "line-through text-gray-500" : ""}`}>{item.todo}</div>
              <div className="button">
                <button
                  type="submit"
                  onClick={handleEdit(index)}
                  className="bg-violet-800 hover:bg-violet-950 p-3 py-1 mx-6 text-white rounded-md "
                >
                  Edit todo
                </button>
                <button
                  type="submit"
                  onClick={(e)=>handleDelete(e,item.id)}
                  className="bg-violet-800 hover:bg-violet-950 p-3 py-1 mx-6 text-white rounded-md "
                >
                  Delete todo
                </button>
              </div>
            </div>
          </div>;
        })}
      </div>
    </>
  );
}

export default App;
