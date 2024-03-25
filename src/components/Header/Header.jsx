import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        {/* <Link to="/">
          <h3 className={styles.logo}>Krishna</h3>
        </Link> */}
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.inActive}`
              }
              to="/">
              Home
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.inActive}`
              }
              to="/services">
              Services
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.inActive}`
              }
              to="/skills">
              Skills
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.inActive}`
              }
              to="/about">
              About
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.inActive}`
              }
              to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
