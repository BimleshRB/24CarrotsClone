import React, { useState, useEffect } from "react";

const slideStyles = {
  width: "100%",
  height: "90%",
//   borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderTopLeftRadius: "300px",
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

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const isLastSlide = currentIndex === slides.length - 1;

      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      // console.log(newIndex);
    }, 4000);

    return () => clearInterval(interval);
  });

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;

    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
//   console.log(currentIndex)

  return (
    <div style={sliderStyles} className="midPhoto">
      <div>
        {/* <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div> */}
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles} className="mt-5">
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-8 h-1  ${currentIndex === slideIndex ?"bg-green-950":"bg-slate-500"}`}
          >
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
