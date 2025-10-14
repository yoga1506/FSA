// import React from "react";
import About from "./components/About";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./Service";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Customers />
      {/* <About /> */}
      <Service />
      <Footer />
    </div>
  );
};

export default App;
