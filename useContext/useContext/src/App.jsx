import { useState } from "react";
import "./App.css";
import { countContext } from "./context/context";
import Navbar from "./Navbar"
import Componet2 from "./componet2";

function App() {
  const [count,setCount] = useState(0)

  function handleCount(){
      setCount(count+1)
  }  return (
    <>
      <countContext.Provider value={count}>
      <input type='text' value={count} readOnly></input>
      <button type='submit' onClick={handleCount}>add</button>
        <Navbar></Navbar>
        <Componet2></Componet2>
      </countContext.Provider>
    </>
  );
}
export default App;