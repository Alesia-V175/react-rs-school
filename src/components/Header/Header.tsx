import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const setActiveLink = ({ isActive }: { isActive: boolean }): string => {
  return isActive ? styles.nav__item_active : styles.nav__item;
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrap}>
        <NavLink to="/" className={styles.header__logo}>
          <img src="../../src/assets/icons/logo.svg"
               alt="Tiny Movies"
               title="Tiny Movies"
               className={styles.header__logo_img}/>
        </NavLink>
        <nav>
          <NavLink to="/" className={setActiveLink}>Home</NavLink>
          <NavLink to="/about" className={setActiveLink}>About us</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
