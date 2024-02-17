import React from 'react'
import ReactPlayer from 'react-player'

const FarMore = () => {
  return (
    <div className='flex items-center flex-col mt-20'>
      <h1 className="text-[5rem] leading-tight text-center  text-green-950 font-serif">Far More Than <br /> Just Business</h1>
      <p className='text-gray-500 mb-10 text-lg w-[700px] text-center'>The way you do anything is the way you do everything. We haven’t cracked the code on catering; we simply care unreasonably about every aspect of what we do. We care about people as much as we care about details, and we absolutely refuse to compromise on making your day anything but the best. We’ve got your back from the initial idea to the final farewell!</p>
      {/* <video src={Video} className='h-[85%] w-[80%] mt-10'  muted loop ></video>
 */}



 <ReactPlayer  width='80%' height='85vh'  className="carouselItemChil  mt-10" url="https://youtu.be/7gPP9hsV4a0" />
    </div>
  )
}

export default FarMore
