import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutMe}>
      <h1>About Me</h1>
      <p className={styles.description}>
        As a dedicated MERN Stack web developer, I excel in transforming ideas
        into captivating digital experiences. Leveraging my proficiency in
        MongoDB, Express.js, React.js, and Node.js, I craft robust and scalable
        web applications. With a keen eye for detail and a commitment to
        innovation, I thrive on pushing the boundaries of web development. From
        architecting user-friendly interfaces to implementing complex backend
        systems, I am driven by a passion for delivering high-quality solutions.
        With a track record of success and a thirst for new challenges, I am
        poised to make a meaningful impact in the world of technology.
      </p>
      <p className={styles.signature}>
        I'm Krishna Raj, ready to create the next big thing.
      </p>
    </div>
  );
};

export default About;
