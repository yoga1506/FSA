import React from "react";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Product from "./pages/Product";
import Homepage from "./pages/HomePage";

import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="/" element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />

        <Route path="app" element={<AppLayout />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
