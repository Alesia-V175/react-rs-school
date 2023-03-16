import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h2>Ooops, something went wrong. This page does not exist</h2>
    Go <Link to="/">home</Link>
  </div>
);

export default NotFound;
