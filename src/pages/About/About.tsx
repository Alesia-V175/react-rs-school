import React from 'react';
import styles from './About.module.scss';

const About = () => (
  <>
    <div className={styles.about__banner}>
      <img src="src/assets/images/about-banner.jpg" alt="banner" className={styles.about__banner_img}/>
    </div>
    <div className={styles.about__content}>
      <h1 className={styles.about__title}>All about us</h1>
    </div>
  </>
);

export default About;
