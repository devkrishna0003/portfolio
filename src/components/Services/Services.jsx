// Services.js

import React from "react";
import styles from "./Services.module.css";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaMobileAlt,
  FaCloud,
  FaUser,
} from "react-icons/fa"; // Importing icons

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.serviceCard}>
        <FaCode className={styles.icon} />
        <h3>Frontend Development</h3>
        <p>
          Building user interfaces using modern frontend technologies like
          React, Angular, or Vue.
        </p>
      </div>
      <div className={styles.serviceCard}>
        <FaDatabase className={styles.icon} />
        <h3>Database Management</h3>
        <p>
          Designing and managing databases using SQL or NoSQL databases like
          MongoDB.
        </p>
      </div>
      <div className={styles.serviceCard}>
        <FaServer className={styles.icon} />
        <h3>Backend Development</h3>
        <p>
          Creating robust backend systems using Node.js, Express, and other
          frameworks.
        </p>
      </div>
      <div className={styles.serviceCard}>
        <FaMobileAlt className={styles.icon} />
        <h3>Mobile App Development</h3>
        <p>
          Developing cross-platform mobile applications using frameworks like
          React Native or Flutter.
        </p>
      </div>
      <div className={styles.serviceCard}>
        <FaCloud className={styles.icon} />
        <h3>Cloud Integration</h3>
        <p>
          Integrating applications with cloud platforms like AWS, Azure, or
          Google Cloud for scalability and reliability.
        </p>
      </div>
      <div className={styles.serviceCard}>
        <FaUser className={styles.icon} />
        <h3>User Experience Design</h3>
        <p>
          Designing intuitive and engaging user experiences to enhance user
          satisfaction and retention.
        </p>
      </div>
      {/* You can add more service cards here */}
    </div>
  );
};

export default Services;
