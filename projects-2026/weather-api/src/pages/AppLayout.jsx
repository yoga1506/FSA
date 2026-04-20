import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      <nav className="bg-gray-500 p-3 flex justify-between text-white capitalize px-16">
        <div className="text-center md:text-left">YDV technologies</div>

        <div className="hidden md:block">
          <div className="flex gap-12">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </nav>

      <main className="overflow-auto">
        <Outlet />
      </main>

      <footer className="bg-gray-500 p-3 text-center text-white capitalize">
        footer
      </footer>
    </div>
  );
};

export default AppLayout;
