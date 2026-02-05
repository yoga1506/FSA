import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Cart from "./features/cart/Cart.jsx";
import User from "./features/user/CreateUser.jsx";
import Order from "./features/order/Order.jsx";
import Menu from "./features/menu/Menu.jsx";
import CreateOrder from "./features/order/CreateOrder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/order/:orderId",
    element: <Order />,
  },

  {
    path: "order/new",
    element: <CreateOrder />,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
