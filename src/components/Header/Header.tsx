import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import styles from './Header.module.scss';
import { HEADER_TITLE } from '../../constants/constants';

const setActiveLink = ({ isActive }: { isActive: boolean }): string => {
  return isActive ? styles.nav__item_active : styles.nav__item;
};

class Header extends React.Component<{ headerTitle?: string }> {
  state = {
    headerTitle: HEADER_TITLE.HOME,
  };

  updateHeaderTitle = (headerTitle: string) => {
    this.setState({ headerTitle });
  };

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.header__wrap}>
          <NavLink to="/" className={styles.header__logo}>
            <img src={logo}
                 alt="Photo's Time"
                 title="Photo's Time"
                 className={styles.header__logo_img}/>
          </NavLink>
          <h2 className={styles.header__title}>{this.state.headerTitle}</h2>
          <nav data-testid="navbar">
            <NavLink to="/"
                     className={setActiveLink}
                     data-testid="home-link"
                     onClick={() => this.updateHeaderTitle(HEADER_TITLE.HOME)}>Home
            </NavLink>
            <NavLink to="/about"
                     className={setActiveLink}
                     data-testid="about-link"
                     onClick={() => this.updateHeaderTitle(HEADER_TITLE.ABOUT)}>About us
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
