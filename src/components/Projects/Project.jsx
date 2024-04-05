import React from "react";
import styles from "./Project.module.css";
import { Link } from "react-router-dom";

const Project = ({ liveUrl, gitUrl, img }) => {
  return (
    <>
      <div className={styles.projectCard}>
        <div className={styles.projectImage}>
          <img src={img} alt="img" />
        </div>
        <div className={styles.projectButtons}>
          <Link to={liveUrl} target="_blank" className={styles.button}>
            <button className={styles.gitBtn}>GitHub</button>
          </Link>
          <Link to={gitUrl} target="_blank" className={styles.button}>
            <button className={styles.demoBtn}>Live Demo</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Project;
