import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";

const GreatFood = () => {
  const box = [
    {
      title: "Gourmet Catering ",
      detail:
        "Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.  ",
    },
    {
      title: "Gourmet Catering ",
      detail:
        "Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.  ",
    },
    {
      title: "Gourmet Catering ",
      detail:
        "Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.  ",
    },
    {
      title: "Gourmet Catering ",
      detail:
        "Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.  ",
    },
  ];
  return (
    <div>
      <div className="flex items-center flex-col mt-20">
        <h1 className="text-[5rem] leading-tight text-center  text-green-950 font-serif">
          Great Food & A <br /> Whole Lot More
        </h1>
        <p className="text-gray-500 mb-10 text-lg w-[700px] text-center">
          Catering is just the beginning. Sure, we love astonishing your guests
          with attentive service, thoughtful food, and an inviting environment.
          But what really matters most is helping you create memories that will
          last for a lifetime. Our industry experts think of all the little
          things that turn an ordinary event into an unforgettable experience.
        </p>
        <button className="flex items-center gap-3 bg-[chocolate] w-fit px-8 py-2 mt-4 rounded-3xl ">
          EXPLORE SERVICES <ArrowRightIcon />{" "}
        </button>
      </div>
      <div className="flex justify-center items-center gap-10 mt-20">
      <div className="flex flex-col gap-10 ">
          {box.map((e, i) =>
            i === 0 || i === 1 ? (
              <div key={i} className="w-72 h-48">
                <h2 className="text-2xl text-green-950 font-serif">
                  {e.title}
                </h2>
                <p className="text-gray-600 font-serif">{e.detail}</p>
                <button className="flex items-center gap-3 border-[chocolate] w-fit px-5 py-1 mt-4 rounded-3xl m-3 border text-[chocolate] ">Learn more <ArrowRightIcon className="text-[chocolate]"/> </button>
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="w-fit ">
          {/* img */}
          <img
            src="https://24carrots.com/wp-content/uploads/2023/10/Home_Services_GIF_R3.gif"
            alt=""
            className="h-[80%] w-[400px] rounded-t-full"
          />
        </div>
        <div className="flex flex-col gap-10 ">
          {box.map((e, i) =>
            i === 2 || i === 3 ? (
              <div key={i} className="w-72 h-48">
                <h2 className="text-2xl text-green-950 font-serif">
                  {e.title}
                </h2>
                <p className="text-gray-600 font-serif">{e.detail}</p>
                <button className="flex items-center gap-3  text-[chocolate] border-[chocolate] w-fit px-5 py-1 mt-4 rounded-3xl m-3 border ">Learn more <ArrowRightIcon className="text-[chocolate]"/> </button>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default GreatFood;
