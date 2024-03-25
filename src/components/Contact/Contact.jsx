import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.heading}>
        <h1>Contact Us</h1>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.left}>
          <h2>Connect Now !</h2>
          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <FaWhatsapp className={styles.icon} />
              <p>WhatsApp</p>
            </div>
            <div className={styles.contactMethod}>
              <FaEnvelope className={styles.icon} />
              <p>E-mail</p>
            </div>
            <div className={styles.contactMethod}>
              <FaLinkedin className={styles.icon} />
              <p>LinkedIn</p>
            </div>
            <div className={styles.contactMethod}>
              <FaInstagram className={styles.icon} />
              <p>Instagram</p>
            </div>
          </div>
        </div>
        <div className={styles.emailSection}>
          <h2 className={styles.mail}>Send an email</h2>
          <form className={styles.emailForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                placeholder="Your Message"
                className={styles.textarea}></textarea>
            </div>
            <button type="submit" className={styles.button}>
              Create Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
