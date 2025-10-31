import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../pages/PageNav.module.css";

import Logo from "./Logo";

const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/Pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
        <li>
          <NavLink to="/login">login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
