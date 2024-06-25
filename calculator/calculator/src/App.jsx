import { useState } from 'react';
import './App.css';

function App() {  
  const [value, setValue] = useState('');

  const handleClick = (e) => {
    setValue(value + e.target.value);
  };

  const handleClear = () => {
    setValue('');
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };  

  const handleEqual = () => {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue('Error');
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div>
          <input type="text" value={value} style={{ width: "290px",height:"50px" }} readOnly />
        </div>
        <div>
          <button onClick={handleClear}>AC</button>
          <button onClick={handleDelete}>DE</button>
          <button onClick={handleClick} value=".">.</button>
          <button onClick={handleClick} value="/">/</button>
        </div>
        <div>
          <button onClick={handleClick} value="7">7</button>
          <button onClick={handleClick} value="8">8</button>
          <button onClick={handleClick} value="9">9</button>
          <button onClick={handleClick} value="*">*</button>
        </div>
        <div>
          <button onClick={handleClick} value="4">4</button>
          <button onClick={handleClick} value="5">5</button>
          <button onClick={handleClick} value="6">6</button>
          <button onClick={handleClick} value="+">+</button>
        </div>
        <div>
          <button onClick={handleClick} value="1">1</button>
          <button onClick={handleClick} value="2">2</button>
          <button onClick={handleClick} value="3">3</button>
          <button onClick={handleClick} value="-">-</button>
        </div>
        <div>
          <button onClick={handleClick} value=".">.</button>
          <button onClick={handleClick} value="0">0</button>
          <button onClick={handleClick} value="%">%</button>
          <button onClick={handleEqual} value="=">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
