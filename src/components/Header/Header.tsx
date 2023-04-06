import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import { Paths } from '../../constants/constants';
import styles from './Header.module.scss';

const setActiveLink = ({ isActive }: { isActive: boolean }): string => (
  isActive ? styles.nav__item_active : styles.nav__item
);

const getRouteTitle = () => {
  const currUrl = window.location.pathname;
  return Object.values(Paths).find((page) => page.path === currUrl)?.title || '';
};

const Header = (): JSX.Element => {
  const [headerTitle, setHeaderTitle] = useState(getRouteTitle());

  const updateHeaderTitle = (title: string) => () => setHeaderTitle(title);

  return (
    <header className={styles.header}>
      <div className={styles.header__wrap}>
        <NavLink to="/" className={styles.header__logo}>
          <img
            src={logo}
            alt="Photo's Time"
            title="Photo's Time"
            className={styles.header__logo_img}
          />
        </NavLink>
        <h2 className={styles.header__title}>{headerTitle}</h2>
        <nav data-testid="navbar">
          <NavLink
            to="/"
            className={setActiveLink}
            data-testid="home-link"
            onClick={updateHeaderTitle(Paths.home.title)}>Home
          </NavLink>
          <NavLink
            to="/about"
            className={setActiveLink}
            data-testid="about-link"
            onClick={updateHeaderTitle(Paths.about.title)}>About us
          </NavLink>
          <NavLink
            to="/form"
            className={setActiveLink}
            data-testid="form-link"
            onClick={updateHeaderTitle(Paths.form.title)}>Form
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
