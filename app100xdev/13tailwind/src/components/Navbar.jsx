import React from "react";
import logo from "../assets/logo.jpg";
import whatsapp from "../assets/whatsapp.webp";
import linkedin from "../assets/linkedin.webp";
import gmail from "../assets/gmail.webp";
import instagram from "../assets/instagram.webp";

const Navbar = () => {
  return (
    <div className="w-[100%] p-2 pl-36 pr-36">
      <nav className="flex justify-between    m-auto items-center">
        <div className="logo">
          <img className="w-24" src={logo} alt="" />
        </div>
        <ul className="flex gap-4 text-gray-600">
          <li className="text-[12px] font-semibold">Home</li>
          <li className="text-[12px] font-semibold">Services</li>
          <li className="text-[12px] font-semibold">About Us</li>
          <li className="text-[12px] font-semibold">Contact</li>
        </ul>
        <div className="social-icon flex gap-4">
          <img className="w-5" src={whatsapp} alt="" />
          <img className="w-5" src={linkedin} alt="" />
          <img className="w-5" src={gmail} alt="" />
          <img className="w-5" src={instagram} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
