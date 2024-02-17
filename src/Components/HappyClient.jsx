import React from 'react'
import FullCarousel from "./FullCarousel"
const happyClient = () => {
    const Img = "https://24carrots.com/wp-content/themes/24carrots/img/24cemblem.svg";
  return (
    <div className=''>
      <div className='bg-green-900 pt-20 w-full h-full mt-[5rem] flex flex-col justify-center items-center'>
<h1 className='text-center text-white text-[4em] font-serif'>Our Happy Client</h1>
<p className='text-center text-gray-400 w-[800px]  '>Food may be our love language, but words of affirmation always make us ecstatic! Read what our happy clients have to say about how we made their day great.</p>
<FullCarousel/>
      </div>



    </div>
  )
}

export default happyClient
