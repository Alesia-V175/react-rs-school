import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About us</NavLink>
    </header>

    <main className='main'>
      <Outlet />
    </main>

    <footer className="footer">
      <ul className="footer__list container">
        <li className="footer__item">
          <a href="https://github.com/Alesia-V175" target="_blank" className="link github-logo" rel="noreferrer">
            <img src='../../src/assets/icons/github.svg'></img>
          </a>
        </li>
        <li className="footer__item">© by Alesia Sokolovskaya 2023</li>
        <li className="footer__item">
          <a href="https://rs.school/js/" target="_blank" className="link" rel="noreferrer">
            <img className="rs-logo" src="../../src/assets/icons/rs-school.svg" alt="RS School" title="RS School" />
          </a>
        </li>
      </ul>
    </footer>
  </>
);

export default Layout;
