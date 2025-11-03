import React from "react";
import styles from "../components/Sidebar.module.css";
import Logo from "../pages/Logo";
import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        &copy; Copyright {new Date().getFullYear()} by worlswise.inc
      </footer>
    </div>
  );
};

export default Sidebar;
