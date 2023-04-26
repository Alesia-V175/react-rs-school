import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import { Paths } from '../../constants/constants';
import styles from './Header.module.scss';

const setActiveLink = ({ isActive }: { isActive: boolean }): string => (
  isActive ? styles.nav__item_active : styles.nav__item
);

const Header = (): JSX.Element => {
  const currPageRoute = useLocation().pathname;

  const currTitle = (title: string) => {
    let pageTitle;

    switch (title) {
      case Paths.home.title:
        pageTitle = Paths.home.title;
        break;
      case Paths.about.path:
        pageTitle = Paths.about.title;
        break;
      case Paths.form.title:
        pageTitle = Paths.form.title;
        break;
      default:
        pageTitle = Paths.home.title;
    }

    return pageTitle;
  };

  const [headerTitle, setHeaderTitle] = useState<string>(currTitle(currPageRoute));
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
        <nav className={styles.nav} data-testid="navbar">
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
