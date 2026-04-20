import React from "react";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="left flex justify-center px-12 flex-col">
        <h1 className="font-bold text-3xl mb-4 capitalize">yogaraj vedagiri</h1>
        <p className="text-xl font-semibold mb-6">React Developer</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          amet veniam voluptatem illo non consequuntur unde vel illum!
          Voluptatem debitis numquam laborum ullam. Aliquam amet eum quae nihil
          consequuntur. Excepturi consequatur alias repellendus.
        </p>
        <NavLink to={"/contact"}>
          {" "}
          <button className="bg-blue-500 text-white px-3 py-2 w-32 mt-4 rounded-2xl text-center">
            Contact Us
          </button>
        </NavLink>
      </div>
      <div className="right flex justify-center items-center ">
        <img
          className="w-[600px] h-[600px] rounded-2xl hidden md:block"
          src="https://images.pexels.com/photos/16129728/pexels-photo-16129728.jpeg"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Home;
