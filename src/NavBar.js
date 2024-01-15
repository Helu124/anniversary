// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import BirthdayMessage from "./BirthdayMessage";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/birthday-message">Birthday Message</Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
