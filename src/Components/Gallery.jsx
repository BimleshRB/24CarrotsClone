import React from "react";
import "./css/gallery.css";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Gallery = () => {
  const images = [
    {
      url: "https://24carrots.com/wp-content/uploads/2023/03/the-richland-tanveer-badal-13.jpg",
      title: "The Richland",
      subTitle: "ORANGE",
    },
    {
        url: "https://24carrots.com/wp-content/uploads/2023/09/MAIN.jpg",
        title: "Oak Creek Golf Club",
        subTitle: "IRVINE",
      },
      {
        url: "https://24carrots.com/wp-content/uploads/2023/03/the-richland-tanveer-badal-13.jpg",
        title: "Rancho Las Lomas",
        subTitle: "SILVERADO",
      },
      {
        url: "https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN-4.jpg",
        title: "Francican Gardens",
        subTitle: "SAN JUAN CAPISTRANO",
      },
      {
        url: "https://24carrots.com/wp-content/uploads/2023/08/7-31-5.png",
        title: "the Colony House",
        subTitle: "ANAHEIM",
      },
      
  ];
  return (
    
      <div className="galleryMain">
        {images.map((images, index) => (
          <div className="galleryimage " style={{backgroundImage:`url(${images.url})`}} key={index}>
            {/* <img src={images.url} alt="" className="img" /> */}
            <div className="Hover ">
              <button className="border  text-white font[2em] px-5 py-1 flex items-center gap-3  w-fit  rounded-3xl">
                EXPLORE VENUE <ArrowRightIcon />
              </button>
              <div className="absolute bottom-10 left-0 w-full  z-50">

             
              <h2 className="font-serif text-6xl m-2">{images.title}</h2>
              <div className="w-full h-1 m-2 bg-white"></div>
              <h3 className="text-white m-2">{images.subTitle}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
  
  );
};

export default Gallery;
