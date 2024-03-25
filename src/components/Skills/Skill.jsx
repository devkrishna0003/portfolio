import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaWordpress,
  FaBootstrap,
  FaGithub,
  FaNodeJs,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiGit,
} from "react-icons/si";
import styles from "./Skill.module.css";

const skillsData = [
  {
    icon: <FaHtml5 />,
    title: "HTML",
    level: "Advanced",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications.",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS",
    level: "Advanced",
    description:
      "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML.",
  },
  {
    icon: <FaJsSquare />,
    title: "JavaScript",
    level: "Advanced",
    description:
      "JavaScript is a programming language that enables interactive web pages and is essential for web development.",
  },
  {
    icon: <FaReact />,
    title: "ReactJS",
    level: "Advanced",
    description:
      "ReactJS is a JavaScript library for building user interfaces, particularly for single-page applications.",
  },
  {
    icon: <FaWordpress />,
    title: "WordPress",
    level: "Intermediate",
    description:
      "WordPress is a content management system (CMS) used for building websites and blogs, known for its user-friendly interface and extensive plugin ecosystem.",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
    level: "Advanced",
    description:
      "Bootstrap is a popular CSS framework that facilitates responsive web design and development by providing pre-designed components and utilities.",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    level: "Advanced",
    description:
      "Tailwind CSS is a utility-first CSS framework that allows for rapid development by providing pre-defined utility classes.",
  },
  {
    icon: <SiRedux />,
    title: "Redux",
    level: "Advanced",
    description:
      "Redux is a predictable state container for JavaScript apps, commonly used with React for managing application state.",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    level: "Advanced",
    description:
      "GitHub is a web-based platform used for version control and collaboration on software development projects using Git.",
  },
  {
    icon: <SiGit />,
    title: "Git",
    level: "Advanced",
    description:
      "Git is a distributed version control system used for tracking changes in source code during software development.",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    level: "Intermediate",
    description:
      "Node.js is a JavaScript runtime environment that allows developers to run JavaScript code on the server-side, facilitating the development of scalable web applications.",
  },
  {
    icon: <SiExpress />,
    title: "Express.js",
    level: "Intermediate",
    description:
      "Express.js is a web application framework for Node.js, designed for building web applications and APIs.",
  },
  {
    icon: <FaDatabase />,
    title: "MongoDB",
    level: "Intermediate",
    description:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it suitable for applications with evolving data requirements.",
  },
  {
    icon: <SiMongodb />,
    title: "MEAN/MERN Stack",
    level: "Intermediate",
    description:
      "MEAN/MERN Stack is a collection of JavaScript-based technologies (MongoDB, Express.js, Angular/React, Node.js) used for building modern web applications.",
  },
  {
    icon: <FaServer />,
    title: "APIs",
    level: "Advanced",
    description:
      "APIs (Application Programming Interfaces) allow different software applications to communicate and interact with each other, enabling the integration of third-party services into web applications.",
  },
];

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h1 className={styles.skillHeading}>Skills</h1>
      <div className={styles.skillList}>
        {skillsData.map((skill, index) => (
          <div className={styles.skillCard} key={index}>
            <div className={styles.skillIcon}>{skill.icon}</div>
            <div className={styles.skillContent}>
              <h2>{skill.title}</h2>
              <p>{skill.description}</p>
              <p className={styles.skillLevel}>Level: {skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
