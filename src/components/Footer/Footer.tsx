import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.footer__list}>
      <li>
        <a href="https://github.com/Alesia-V175"
           target="_blank"
           className={styles.footer__link}
           rel="noreferrer">
          <img src='../../src/assets/icons/github.svg'
               alt="Github" title="Alesia's Github"
               className={styles.footer__logo_github} />
        </a>
      </li>
      <li>© by Alesia Sokolovskaya 2023</li>
      <li>
        <a href="https://rs.school/js/"
           target="_blank"
           className={styles.footer__link}
           rel="noreferrer">
          <img src="../../src/assets/icons/rs-school.svg"
               alt="RS School" title="RS School"
               className={styles.footer__logo_rs} />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
