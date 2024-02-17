import React from 'react'
import "../App.css"
import Video from "../assets/video.mp4"
import { CaretDownIcon } from '@radix-ui/react-icons';
const HeroVideo = () => {
  return (
    <div className='relative'>
      <video src={Video} autoPlay muted loop></video>
<h1 className='hereTextCenter' >Simply the Finest</h1>
<div className='flex w-[98vw] justify-center absolute bottom-0  text-center'>

<CaretDownIcon className=' text-white text-3xl w-32 h-20'/>
</div>
    </div>
  )
}

export default HeroVideo
