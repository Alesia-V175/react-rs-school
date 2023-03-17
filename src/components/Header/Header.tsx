import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const setActiveLink = ({ isActive }: { isActive: boolean }): string => isActive ? 'nav__item_active' : 'nav__item';

const Header = () => (
  <header className="header">
    <div className='header__wrap container'>
      <NavLink to="/" className="header__logo">
        <img src="../../src/assets/icons/logo.svg"
             alt="Tiny Movies"
             title="Tiny Movies"
             className="header__logo_img"/>
      </NavLink>
      <nav>
        <NavLink to="/" className={ setActiveLink }>Home</NavLink>
        <NavLink to="/about" className={ setActiveLink }>About us</NavLink>
      </nav>
    </div>
  </header>
);

export default Header;
