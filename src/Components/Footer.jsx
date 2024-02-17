import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import Img from "../assets/24carrots.svg";
const Footer = () => {
  return (
    <div className="font-seri bg-amber-600f">
      <div className="flex gap-3 w-full justify-evenly pt-20 ">
        <div className="flex flex-col gap-10 justify-evenly border-b-2 border-green-950 pb- w-72">
          <img src={Img} alt="" className="w-48" />
          <p className="w-52 ">
            The event specialists at our Southern California headquarters are
            available to help with every aspect of your event.
          </p>
        </div>
        <div className="flex gap-5">
          <ul className="w-36">
            <li className="flex gap-2 text-2xl items-center">
              About <ArrowRightIcon className="text-[chocolate] h-6 w-6" />{" "}
            </li>
            <li>about1</li>
            <li>about1</li>
            <li>about1</li>
            <li>about1</li>
          </ul>
          <ul lassName="w-36">
            <li className="flex gap-2 text-2xl ">
              Services <ArrowRightIcon className="text-[chocolate]  h-6 w-6" />{" "}
            </li>
            <li>services1</li>
            <li>services1</li>
            <li>services1</li>
            <li>services1</li>
          </ul>
          <ul lassName="w-36">
            <li className="flex gap-2 text-2xl">
              Events <ArrowRightIcon className="text-[chocolate]  h-6 w-6" />{" "}
            </li>
            <li>Events1</li>
            <li>Events1</li>
            <li>Events1</li>
            <li>Events1</li>
          </ul>
          <ul className="flex flex-col gap-4 w-40">
            <li className="flex gap-2 text-xl items-center">
              Venues <ArrowRightIcon className="text-[chocolate] h-6 w-6" />{" "}
            </li>
            <li className="flex gap-2 text-xl items-center">
              careers <ArrowRightIcon className="text-[chocolate] h-6 w-6" />{" "}
            </li>
            <li className="flex gap-2 text-xl items-center">
              Contacy <ArrowRightIcon className="text-[chocolate] h-6 w-6" />{" "}
            </li>
          </ul>
          <ul>
            <li className="flex gap-2 text-xl items-center">
              Follow Us <ArrowRightIcon className="text-[chocolate] h-6 w-6" />{" "}
            </li>

            <li className="flex gap-2 text-lg items-center">
              <img
                src="https://th.bing.com/th/id/OIP.TbVQ4_I3wdn7py1ZVfNi0wHaHa?rs=1&pid=ImgDetMain"
                alt=""
                className="h-10 w-10 p-2 bg-cover"
              />{" "}
              Favebook
            </li>
            <li className="flex gap-2 text-lg items-center">
              <img
                src="https://th.bing.com/th/id/R.af1159ea3dd22f4b3d84a87d869127b9?rik=iz68IEBoErXAHw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2finstagram-icon-png-instagram-icon-1600.png&ehk=%2bAo2wF7lgRZJrtXPe3ev37c8JDCD6NBcj%2fGufhuhjQE%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="h-10 w-10 bg-cover p-2"
              />{" "}
              Instagram
            </li>
            <li className="flex gap-2 text-lg items-center">
              <img
                src="https://cdn1.iconfinder.com/data/icons/simple-icons/256/pinterest-256-black.png"
                alt=""
                className="h-10 w-10 bg-cover p-2"
              />{" "}
              Pintrest
            </li>
            <li className="flex gap-2 text-lg items-center">
              <img
                src="https://www.vhv.rs/file/max/8/80784_linkedin-logo-white-png.png"
                alt=""
                className="h-10 w-10 bg-cover p-2"
              />{" "}
              LinkedIn
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[83%] m-auto flex justify-between p-5 pt-8 border-b-2 border-green-950">
        <p className="p-3">
          {" "}
          <b> CALL US</b>714.942.6000  • 800.717.1545 <br />
          <b>EMAIL US</b>info@24carrots.com <br />
          FIND US150 Baker Street East, Costa Mesa, CA 92626
        </p>
        <p className="p-3 flex gap-3">
        Site & design by Dooley Creative Co. <img src="" alt="img" className="w-6 h-6 rounded-full " />
        </p>
      </div>

<div className="w-[78%] m-auto flex justify-between pt-8 pb-8">
<p>© 2023 24 Carrot Catering & Events. All rights reserved.</p>
<p>ADA Accessibility Policy Privacy Policy</p>
</div>


    </div>
  );
};

export default Footer;
