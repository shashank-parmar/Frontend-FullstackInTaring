import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [value,setValue]=useState('')
    const handleClick = (e)=>{
        setValue(e.target.value)
    }

    useEffect( ()=>{
        console.log(value)
    },[value])

  return (
    <div className='border-2 w-60 h-[633px]  bg-slate-700 text-white'>
      <div className='container'>
      <p className='p-10 font-extrabold text-3xl'>Sizes:</p>
      <div className='text-justify m-3'>
        <button type='button' value="xs" onClick={handleClick} className='border-2  bg-blue-800 justify-center p-3 rounded-md m-3 text-2xl    '>XS</button>
        <button type='button' value="s" onClick={handleClick} className='border-2  bg-blue-800 justify-center p-3 rounded-md m-3 text-2xl '>S</button>
        <button type='button' value="m" onClick={handleClick} className='border-2  bg-blue-800 justify-center p-3 rounded-md m-3 text-2xl '>M</button>
        <button type='button' value="l" onClick={handleClick} className='border-2  bg-blue-800 justify-center p-3 rounded-md m-3 text-2xl '>L</button>
        <button type='button' value="xl" onClick={handleClick} className='border-2  bg-blue-800 justify-center p-3 rounded-md m-3 text-2xl    '>XL</button>
        <button type='button' value='xxl' onClick={handleClick} className='border-2  bg-blue-800 justify-center p-3 rounded-md m-3 text-2xl   '>XXL</button>
      </div>
    </div>
    </div>
  )
}
