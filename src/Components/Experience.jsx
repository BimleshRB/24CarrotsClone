import { ArrowRightIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
const slideStyles = {

  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#000",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "black",

  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const Midphoto = () => {
    const slides = [
            {
              url: "https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg",
              li: "Weddings",
              title: "EXCEPTIONAL WEDDINGS",
              details:
                "The most important day of your life, is ours too. Your wedding should be the ultimate celebration of your relationship, and our team of experts guide you through the process, offering peace of mind and a remarkable experience. ",
            },
            {
                url: "https://24carrots.com/wp-content/uploads/2023/10/2.2-Social-Lorely-Meza.jpg",
                li: "Social",
                title: " LEARN MORE INCOMPARABLE SOCIAL EVENTS",
                details:
                  "We sweat the small stuff, so you don’t have to. For all of life’s special occasions, we give your anniversary, shower, or birthday party the attention it deserves, allowing you to focus on being present with your guests! ",
              },
            {
                url: "https://24carrots.com/wp-content/uploads/2023/10/2.2-Social-Lorely-Meza.jpg",
                li: "Corporate",
                title: "  ONE-OF-A-KIND CORPORATE EVENTS",
                details:
                  "  Our job is to make you look good. From office lunches to large-scale corporate events, we’ve made our business out of making your business shine.",
              },
            {
                url: "https://24carrots.com/wp-content/uploads/2023/10/2.2-Social-Lorely-Meza.jpg",
                li: "Venues",
                title: "  EXCLUSIVE SOCIAL VENUES",
                details:
                  "  We don’t put you in a box. Each venue is unique to each party, and our curated list of event spaces and venue partners offers easy access with personalized service at Southern California’s premier locations. ",
              },
        ];
  const [currentIndex, setCurrentIndex] = useState(0);


  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };


  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };






  return (
    <div className="h-[100vh] w-full flex gap-10 mt-20 transition-all duration-500">
    <div style={sliderStyles} className="w-[45%] h-[90%] flex justify-end items-center pr-20 transition-all duration-500">

      <div style={slideStylesWidthBackground}   className="w-[70%] h-[90%] rounded-t-full  ">

      </div>
     
    </div>
    <div className="mt-20 font-serif"  >
        <h1 className="text-[6rem] leading-tight  text-green-950 font-serif">
        Making Every <br /> Experience <br /> Magical
        </h1>
        <div className="flex gap-5 justify-start items-start pt-5 relative ">
            {/* list */}
    <div style={dotsContainerStyles} className="flex flex-col items-start  text-2xl ">
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={` hover:text-[chocolate]  ${currentIndex === slideIndex ?"text-green-950":"text-slate-500"} `}
          >
            <h2 className="text-2xl p-1">   {slide.li}</h2>
          </div>
        ))}
      </div>
      <div className="relative">
      {/* details */}
      {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={` flex flex-col gap-5 absolute  `}
            
          >
            <span className="transition-all duration-500">{slideIndex === currentIndex ?slide.title:""}</span>
            <span className="w-[500px] text-gray-500 transition-all duration-500 ">   {slideIndex === currentIndex ?slide.details:""}</span>
            {slideIndex === currentIndex ?    <button className="flex items-center gap-3 bg-[chocolate] w-fit px-5 py-1 rounded-3xl">Learn more <ArrowRightIcon/> </button>:""}
        
           
          </div>
        ))}
   

      </div>
      </div>
    </div>
    </div>
  );
};

export default Midphoto;
