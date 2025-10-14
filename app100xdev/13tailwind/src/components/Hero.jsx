import React from "react";
import heroImg from "../assets/heroimage.webp";
const Hero = () => {
  return (
    <div className="flex gap-5  justify-between items-center pl-28 bg-gray-50 h-[90vh] pt-8 capitalize">
      <div className="w-[50%]">
        <h1 className="text-4xl mb-4 font-bold">
          A modern look <br /> and feel for your <br />{" "}
          <span className="text-orange-500">mobile app</span>
        </h1>
        <h4 className="text-sm">
          Make your website or web application stand out <br /> with
          high-quality landing pages designed and <br />
          developed by professionals.
        </h4>
      </div>
      <div className="w-[50%] pr-28">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
