import React from "react";
import logo from "../assets/logo.jpg";
import whatsapp from "../assets/whatsapp.webp";
import linkedin from "../assets/linkedin.webp";
import gmail from "../assets/gmail.webp";
import instagram from "../assets/instagram.webp";
const icon = [
  {
    image: whatsapp,
  },
  {
    image: linkedin,
  },
  {
    image: gmail,
  },
  {
    image: instagram,
  },
];

const Footer = () => {
  return (
    <div className="py-4 bg-white mx-auto flex items-center  ">
      <div className="mx-auto text-center flex  flex-col items-center">
        <img className="w-32 mb-4" src={logo} alt="" />
        <h1 className="text-xl text-gray-800 font-bold py-2">
          Experience The Excellence
        </h1>
        {icon.map((icon) => {
          return (
            <>
              <div className=" ">
                <img
                  className="w-5 h-5 object-contain "
                  src={icon.image}
                  alt=""
                />
              </div>
            </>
          );
        })}
        <li className="list-none">
          Home - About Us - Services - Contact - Privacy
        </li>
        <p className="text-sm py-2">Copyright @ 2023. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
