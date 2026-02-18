import React from "react";
import Login from "./component/Login";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./component/Home";
import Employer from "./component/Employer";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/", element: <Home /> },
  { path: "/employer", element: <Employer /> },
]);

const App = () => {
  return <RouterProvider router={router}>app</RouterProvider>;
};

export default App;
