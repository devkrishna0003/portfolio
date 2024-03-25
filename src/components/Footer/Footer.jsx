import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.navbar}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link to="/">-home</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/services">-services</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/skills">-skills</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/about">-about</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/contact">-contact us</Link>
          </li>
        </ul>
      </nav>
      <h1 className={styles.creator}>Created and designed by Krishna Raj</h1>
      <div className={styles.copyRight}>
        <p>
          CopyRight &copy; {new Date().getFullYear()} all rights reserved
          Krishna Raj
        </p>
        <FaHeart className={styles.heartIcon} />
      </div>
    </footer>
  );
};

export default Footer;
