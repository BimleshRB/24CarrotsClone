import React from 'react'
import "../App.css"
import { ArrowRightIcon } from '@radix-ui/react-icons'
const Unforgettable = () => {
  return (
    <>
    <div className='w-full h-full bg-cover relative bg-center lg:mt-30' >
      <img src="https://24carrots.com/wp-content/uploads/2023/10/unforegetable-banner.png" alt="" />
      <div className='w-[740px]  h-[350px] bg-white  absolute bottom-[-30px] left-[50%] translate-x-[-50%] tr text-center clipPath'>
        <h3  className='absolute bottom-[5px] text-center w-full text-2xl text-gray-600'>Venues</h3></div>


      
    </div>
    <div className='flex justify-center items-center flex-col mt-10'>
            <h1 className="text-[5rem] leading-tight text-center  text-green-950 font-serif">Unforgettable <br /> Venues</h1>
            <p className='text-gray-500  text-lg w-[700px] text-center'>24 Carrots is the exclusive or preferred caterer at Southern California’s most spectacular properties. From intimate understated spaces to large and luxurious, we’ll help you find the event venue that makes your heart skip a beat.</p>
            <button className="flex items-center gap-3 bg-[chocolate] w-fit px-5 py-1 mt-4 rounded-3xl ">Learn more <ArrowRightIcon/> </button>
        </div>
    </>
  )
}

export default Unforgettable
