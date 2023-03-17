import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer.js';
import Header from './Header/Header.js';

const Layout = () => (
  <>
    <Header />

    <main className='main'>
      <Outlet />
    </main>

    <Footer />
  </>
);

export default Layout;
