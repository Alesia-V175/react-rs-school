import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.js';
import About from '../pages/About/About.js';
import NotFound from '../pages/NotFound/NotFound.js';
import Layout from '../components/Layout/Layout.js';
import styles from './App.module.scss';
import Form from '../pages/Form/Form.js';

const App = () => {
  return (<div className={styles.App}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </div>
  );
};

export default App;
