import React from 'react'

export default function Navbar() {
  return (
    <div className='text-white  w-full h-16 flex bg-slate-400 justify-between md:px-4'>
      <div className='to-slate-500   font-bold text-blue-600 font-extrabold text-center text-2xl text-center items-center flex'>shashank</div>
      <ul className='flex justify-between items-center md:flex hidden'>
        <li className='mx-2 cursor-pointer font-semibold'>Home</li>
        <li className='mx-2 cursor-pointer font-semibold'>About</li>
        <li className='mx-2 cursor-pointer font-semibold'>Countact Us</li>
      </ul>
      <div className='md:block text-white rounded-sm border-2 bg-indigo-600 justify-center flex items-center px-2 py-2 cursor-pointer rounded-md h-10 mt-3'>Login/SignUp</div>
      <div>
        <a href='/'>&#8801;</a>
      </div>  
    </div>
  )
}
