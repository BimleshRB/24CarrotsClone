import { useEffect, useState } from "react";
import Experience from "./Components/Experience";
import FarMore from "./Components/FarMore";
import Gallery from "./Components/Gallery";
import HeroVideo from "./Components/HeroVideo";
import Navbar from "./Components/Navbar";
import Remarkable from "./Components/Remarkable";
import Unforgettable from "./Components/Unforgettable";
import HappyClient from "./Components/HappyClient";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import "./App.css"
import GreatFood from "./Components/GreatFood";
import Footer from "./Components/Footer";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  return (
    <>
      <div className="flex justify-center bg-white z-50 w-full ">

        <Navbar showButton={showButton} />
      </div>
      <div>
        <HeroVideo/>
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top flex items-center gap-3">
        <ChevronUpIcon className="h-6 w-6"/> Back to Top 
        </button>
      )}
      <div>
        <Remarkable/>
      </div>
      <div className="h-[100vh] w-full">
        <Experience/>
      </div>
      <div>
        <Unforgettable/>
      </div>
      <div>
        <Gallery/>
      </div>
      <div>
        <FarMore/>
      </div>
      <div>
        <GreatFood/>
      </div>
      <div>
        <HappyClient/>
      </div>
      <div>
        <Footer/>
      </div>
     
    </>
  );
}

export default App;
