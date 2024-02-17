import React from "react";
import Carousel from "./Carousel";

const Remarkable = () => {
  const slides = [
    {
      url: "https://24carrots.com/wp-content/uploads/2023/10/1.4-Lorely-Meza.jpg",
    },
    {
      url: "https://24carrots.com/wp-content/uploads/2023/10/1.3-Holly-Sigafoos-Photo.jpg",
    },
    {
      url: "https://24carrots.com/wp-content/uploads/2023/10/1.4-Lorely-Meza.jpg",
    },
    {
      url: "https://24carrots.com/wp-content/uploads/2023/10/1.3-Holly-Sigafoos-Photo.jpg",
    },
  ];
  return (
    <div className="flex gap-4 lg:w-[100%] h-[100vh] p-7 mt-10">
      <div className="lg:w-[50%] pr-10 pl-10 flex justify-center items-center flex-col">
        <p className="capitalize text-gray-400 text-lg text-center mb-5 ">
          Welcome to 24 carrots
        </p>
        <h1 className="text-[6rem] leading-tight text-center text-green-950 font-serif">
          {" "}
          Remarkable <br /> Catering & <br /> Events
        </h1>

        <p className="text-center w-[500px] m-auto mt-0 mb-0">
          24 Carrots is the premier catering and events company of choice in
          Southern California. We create remarkable experiences by offering the
          finest quality foods and providing unsurpassed personalized service,
          driven by our passion for life’s special occasions.
        </p>
        <button className="bg-[chocolate] text-white rounded-full px-5 py-1 w-fit mt-7">
          GET IN TOUCH
        </button>
      </div>
      <div className="lg:w-[50%] ">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Remarkable;
