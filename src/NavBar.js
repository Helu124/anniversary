// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/anniversary-message">Message</Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
