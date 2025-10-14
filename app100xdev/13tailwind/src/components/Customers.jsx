import React from "react";
import festa from "../assets/fests-logo.jpg";
import skb from "../assets/skb.webp";
import rotary from "../assets/rotary.jpg";
import divya from "../assets/divyasena.jpg";
import usp from "../assets/usp.jpg";
import bean from "../assets/bean.webp";
import syns from "../assets/synprosoft.jpg";
// import divya from "../assets/divyasena.jpg";
// import festa from "../assets/fests-logo.jpg";

const Customers = () => {
  return (
    <div className="p-8">
      <h1 className="text-center pt-12  font-bold ">
        Join our prestigious clients{" "}
        <span className="text-orange-500 font-semibold"> who trust us</span>
      </h1>

      <div className="images flex  gap-8 justify-center mt-9">
        <img className="w-20 h-20 object-contain " src={festa} alt="" />
        <img className="w-20 h-20 object-contain " src={skb} alt="" />
        <img className="w-20 h-20  object-contain" src={rotary} alt="" />
        <img className="w-20 h-20 object-contain " src={divya} alt="" />
      </div>
      <div className="images flex  gap-8 justify-center mt-9">
        <img className="w-20 h-20 object-contain " src={usp} alt="" />
        <img className="w-20 h-20 object-contain " src={bean} alt="" />
        {/* <img className="w-20 h-20  object-contain" src={rotary} alt="" /> */}
        <img className="w-20 h-20 object-contain " src={syns} alt="" />
      </div>
    </div>
  );
};

export default Customers;
