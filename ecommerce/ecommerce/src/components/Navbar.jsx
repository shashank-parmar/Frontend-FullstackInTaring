import { useEffect, useState } from "react"
import "./Navbar.css"

export default function Navbar() {
    const[value,setValue]=useState('')
    const handleClick = (e) => {
        setValue(e.target.value);
      };

      useEffect(()=>{
        console.log(value)
      },[value])

  return (
    <div className='container'>
      <p>Sizes:</p>
      <div>
        <button type='button' value="xs" onClick={handleClick}>XS</button>
        <button type='button' value="s" onClick={handleClick}>S</button>
        <button type='button' value="m" onClick={handleClick}>M</button>
        <button type='button' value="l" onClick={handleClick}>L</button>
        <button type='button' value="xl" onClick={handleClick}>XL</button>
        <button type='button' value='xxl' onClick={handleClick}>XXL</button>
      </div>
    </div>
  )
}

