import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/product" element={<Products />}>
          Products
        </Route>
        <Route path="/contact" element={<Contact />}>
          Contact
        </Route>
      </Routes>
    </div>
  );
};

export default App;
