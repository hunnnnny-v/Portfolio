import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Hunny</h1>
        <p className={styles.description}>
          I'm a WEB DEVELOPER with ravishing skills in MERN , JAVA AND C++.
          <br />
          <br />
          <code>Initialize</code> | Innovate 🚀 | Impact |<br></br>
          <br></br>
          <hr></hr>
          <br></br>
          Reach out if you'd like to learn more.
        </p>

        <a href="mailto:hunnyv2003@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/mee.jpg")}
        alt="hero image of me"
        className={styles.heroImg}
      />
      <div className={StyleSheet.topBlur} />
      <div className={StyleSheet.bottomBlur} />
    </section>
  );
};
