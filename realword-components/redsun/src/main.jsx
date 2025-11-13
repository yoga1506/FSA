import React from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RedsunEximSite from "./App.jsx";
// import Pagination from "../src/Pagination";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Pagination/> */}
    <RedsunEximSite />
  </StrictMode>
);
