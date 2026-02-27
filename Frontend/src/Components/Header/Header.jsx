import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar bg-black px-6'>
      <Link to='/'>
        <img src='/images/logo.png' alt='quiznova' className='w-[160px]' />
      </Link>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10'>
          <Link to='/'>Home</Link>
        </li>
        <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10'>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
