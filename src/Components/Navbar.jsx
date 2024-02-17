import React from 'react'
import Logo from "../assets/24carrots.svg"
const Navbar = ({showButton}) => {
  return (
    <div className={`flex justify-between transition-all pt-10 pb-10 pr-20 pl-32 duration-300 bg-white z-50 w-[100%]  ${!showButton?"fixed top-0 right-0 left-0 m-auto ":"relative"}`}>
      <div>
        <ul className='flex gap-8'>
            <li className='cursor-pointer'>HOME </li>
            <li className='cursor-pointer'>SERVICES </li>
            <li className='cursor-pointer'>EVENTS </li>
        </ul>
      </div>
      <div className='flex items-center justify-between flex-col'>
            {/* <h1 className='font-semibold text-2xl'>24 CARROTS</h1>
            <p>CATERING & EVENTS</p> */}
            <img src={Logo} alt="" />
      </div>
      <div>
      <ul className='flex gap-8'>
            <li className='cursor-pointer'>VENUES </li>
            <li className='cursor-pointer'>CAREERS </li>
            <button className='bg-[chocolate] text-white rounded-full px-5 py-1'>GET IN TOUCH</button>
           
        </ul>
      </div>
    </div>
  )
}

export default Navbar
