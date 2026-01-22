import React from "react";

const About = () => {
  return (
    <div className=" bg-orange-400 text-white text-center py-5 px-8 ">
      <h1 className="text-3xl mb-4 text-gray-700 font-bold"> About Us</h1>
      <p className="text-justify  m-auto">
        We always aim to provide solutions that reflect our client’s timescales
        and needs. We take our time with our clients ensuring we are always in a
        position to deliver the best results. Our core aim is to always provide
        customer satisfaction In this digital age of Smartphones and smart
        solutions we employ smart- cuts and not shortcuts to get impressive
        digital solutions. In the sea of digital
      </p>
      <p>
        {" "}
        platforms and websites. creativity is the only factor that attracts
        users
      </p>
      <img
        className="w-[300px] h-[300px] object-contain m-auto rounded-xl"
        src="https://images.pexels.com/photos/1595387/pexels-photo-1595387.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
    </div>
  );
};

export default About;
