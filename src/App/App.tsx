import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import About from '../pages/About.js';
import NotFound from '../pages/NotFound.js';
import Layout from '../components/Layout.js';
import styles from './App.module.scss';

const App = () => {
  return (<div className={styles.App}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </div>
  );
};

export default App;
