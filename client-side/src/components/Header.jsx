import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <nav className='h-16  bg-black text-white flex justify-between items-center'>
      <div className='h-16 flex justify-center items-center'>
      <img className='h-16'  src='todoicon.png'></img>
      <label>TO DO APP</label>
      </div>
      <div>
        <Link className="text-white-500 hover:text-blue-700 px-4 py-1 rounded" to="/">Home</Link>
        <Link className="text-white-500 hover:text-blue-700 px-4 py-1 rounded" to="/about">About</Link>
        <Link className="text-white-500 hover:text-blue-700 px-4 py-1 rounded" to="/contact">Contact</Link>
      </div>
      
    </nav>
  )
}

export default Header