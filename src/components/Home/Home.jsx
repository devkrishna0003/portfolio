import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import hero from "../../assets/hero.png";
import currency from "../../assets/currency.png";
import ecom from "../../assets/ecom.png";
import password from "../../assets/password.png";
import qr from "../../assets/qr.png";
import weather from "../../assets/weather.png";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            Hello, my name is
            <span className={styles.name}> krishna raj</span>
          </h1>
          <p className={styles.heroDescription}>
            I'm a very dedicated and hardworking person who always thrives
            working on end-to-end products. With my experience and knowledge, I
            learn many skills and make many successful projects. I enjoyed every
            step of creation, learning, development, and collaboration.
          </p>
          <div className={styles.heroButtons}>
            <Link to="/about" className={styles.button}>
              <button className={styles.hireBtn}>Hire Me</button>
            </Link>
            <Link to="/contact" className={styles.button}>
              <button className={styles.contactBtn}>Contact Us</button>
            </Link>
          </div>
        </div>
        <div className={styles.heroRight}>
          {/* Replace 'image.jpg' with your actual image */}
          <img src={hero} alt="Hero" className={styles.heroImage} />
        </div>
      </div>
      <div className={styles.recentProjects}>
        <div className={styles.projectHeading}>
          <h2 className={styles.recentProjectsHeading}>My recent projects</h2>
        </div>
        <div className={styles.allCards}>
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src={qr} alt="" />
            </div>
            <div className={styles.projectButtons}>
              <Link
                to="https://github.com/devkrishna0003/qr-code-generator"
                target="_blank"
                className={styles.button}>
                <button className={styles.hireBtn}>GitHub</button>
              </Link>
              <Link
                to="https://qrcodebykrishna.netlify.app/"
                target="_blank"
                className={styles.button}>
                <button className={styles.contactBtn}>Live Demo</button>
              </Link>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src={ecom} alt="" />
            </div>
            <div className={styles.projectButtons}>
              <Link
                to="https://github.com/devkrishna0003/ecommerce-cart"
                target="_blank"
                className={styles.button}>
                <button className={styles.hireBtn}>GitHub</button>
              </Link>
              <Link
                to="https://e-commerce-addtocart-app.netlify.app/"
                target="_blank"
                className={styles.button}>
                <button className={styles.contactBtn}>Live Demo</button>
              </Link>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src={weather} alt="" />
            </div>
            <div className={styles.projectButtons}>
              <Link
                to="https://github.com/devkrishna0003/weather"
                target="_blank"
                className={styles.button}>
                <button className={styles.hireBtn}>GitHub</button>
              </Link>
              <Link
                to="https://weathersreporting.netlify.app/"
                target="_blank"
                className={styles.button}>
                <button className={styles.contactBtn}>Live Demo</button>
              </Link>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src={password} alt="" />
            </div>
            <div className={styles.projectButtons}>
              <Link
                to="https://github.com/devkrishna0003/Password-Generator"
                target="_blank"
                className={styles.button}>
                <button className={styles.hireBtn}>GitHub</button>
              </Link>
              <Link
                to="https://random-password-react-app.netlify.app/"
                target="_blank"
                className={styles.button}>
                <button className={styles.contactBtn}>Live Demo</button>
              </Link>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src={currency} alt="" />
            </div>
            <div className={styles.projectButtons}>
              <Link
                to="https://github.com/devkrishna0003/Currency-Converter"
                target="_blank"
                className={styles.button}>
                <button className={styles.hireBtn}>GitHub</button>
              </Link>
              <Link
                to="https://currency-converter-using-react-app.netlify.app/"
                target="_blank"
                className={styles.button}>
                <button className={styles.contactBtn}>Live Demo</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
