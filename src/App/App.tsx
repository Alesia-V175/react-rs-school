import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';
import Layout from '../components/Layout/Layout';
import Form from '../pages/Form/Form';
import styles from './App.module.scss';

const App = () => (
<div className={styles.App}>
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
