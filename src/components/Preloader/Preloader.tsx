import Loader from 'react-ts-loaders';

const Preloader = (): JSX.Element => (
  <Loader
    type="ellipsis"
    color="#295943"
    size={200}
  />
);

export default Preloader;
