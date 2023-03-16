import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About us</NavLink>
    </header>

    <main className='main'>
      <Outlet />
    </main>

    <footer>
      <ul className="footer__list">
        <li className="footer__item">
          <a href="https://github.com/Alesia-V175" target="_blank" className="link github-logo" rel="noreferrer"></a>
        </li>
        <li className="footer__item">© by Alesia Sokolovskaya 2023</li>
        <li className="footer__item">
          <a href="https://rs.school/js/" target="_blank" className="link" rel="noreferrer">
            <img className="rs-logo" src="../../assets/images/rs_school_js.svg" alt="RS School" title="RS School" />
          </a>
        </li>
      </ul>
    </footer>
  </div>
);

export default Layout;
