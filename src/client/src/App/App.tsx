import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';
import Form from '../pages/Form';
import '../styles/index.scss';
import styles from './App.module.scss';

const App = () => (
<div className={styles.App} data-testid="root">
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

export default App;
