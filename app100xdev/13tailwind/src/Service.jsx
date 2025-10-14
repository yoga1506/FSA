import React from "react";
import webApp from "../src/assets/web-app.jpg";
import wordpress from "../src/assets/wordpress.jpg";
import mobileapp from "../src/assets/mob-app.jpg";
import shoplify from "../src/assets/shopify.jpg";
import customBuild from "../src/assets/custom-built.jpg";
import softwareDevelopment from "../src/assets/software-development.jpg";
import graphicDesigning from "../src/assets/graphic-designing.jpg";
import digitalmarketing from "../src/assets/digital-marketing.jpg";

const data = [
  {
    id: 1,
    service: "Web App",
    description:
      "Our Web Apps are user-friendly, powerful, and designed to make your online experience smooth.",
    image: webApp,
  },
  {
    id: 2,
    service: "Mobile App",
    description:
      "Packed with features - our apps are tailored to make your mobile experience exceptional way.",
    image: mobileapp,
  },
  {
    id: 3,
    service: "Word Press",
    description:
      "Our WordPress offerings empower you to manage and showcase your content effortlessly.",
    image: wordpress,
  },
  {
    id: 4,
    service: "Shopify",
    description:
      "Streamline your e-commerce journey and turn your ideas into a thriving online business.",
    image: shoplify,
  },
  {
    id: 5,
    service: "Custom Built",
    description:
      "We bring your vision to life, crafting digital solutions that perfectly align with your goals.",
    image: customBuild,
  },
  {
    id: 6,
    service: "Software Developement",
    description:
      "We specialize in crafting robust and scalable solutions tailored to your specific requirements.",
    image: softwareDevelopment,
  },
  {
    id: 7,
    service: "Graphic Designing",
    description:
      "From compelling logos to stunning visuals, we craft designs that captivate and communicate.",
    image: graphicDesigning,
  },
  {
    id: 8,
    service: "Digital Marketing",
    description:
      "From targeted campaigns to data-driven insights; Amplify your brand's digital impact.",
    image: digitalmarketing,
  },
];

const Service = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="text-center">
        <h1 className="mb-5 text-2xl  font-bold">Services we provide</h1>
        <p>
          Sync your digital assets & data{" "}
          <span className="text-orange-500 font-bold">
            anywhere and everywhere.
          </span>
        </p>
      </div>
      <div className="services ">
        <div className="service grid grid-cols-2  gap-4 w-[800px] mx-auto mt-8 rounded-sm p-2 ">
          {data.map((ser) => (
            <>
              <div className="flex items-center bg-white rounded-md p-2 text-gray-800 ">
                <div className="grid grid-cols-2" key={ser.id}>
                  <img
                    className="w-10 h-10 object-contain hover:ring-offset-amber-500"
                    src={ser.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-bold text-[10px">{ser.service}</h1>
                  <p className="text-[12px] mt-1">{ser.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
