import React from "react";
import shoe from "../assets/image/shoe.png";
import Button1 from "../component/button1";
import Button2 from "./button2";

const HeroSection = () => {
  return (
    <div className="md:flex justify-center md:mt-36">
      <div className="md:flex md:max-w-7xl">
        <div className="md:max-w-xl">
          <p className="text-4xl md:text-7xl my-10 font-black text-center">
            YOUR FEET DESERVE THE BEST
          </p>
          <p className="px-5 md:px-20 py-5 text-gray-600">
            YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="flex justify-center gap-2 py-5">
            <Button1 />
            <Button2 />
          </div>
        </div>
        <div className="px-9 py-6 md:min-w-96 cursor-pointer">
          <img src={shoe} alt="shoe-image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
