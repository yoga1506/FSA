import React from "react";

import Navbar from "./Navbar";
import JobPage from "./Jobpage";

const MainDiv = () => {
  return (
    <>
      <Navbar />
      <JobPage />
      <footer className="text-center font-semibold border-2 py-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi molestias
        odio maxime quos consectetur voluptates dolorem sunt nihil ad quam?
        Quia, debitis.
      </footer>
    </>
  );
};

export default MainDiv;
