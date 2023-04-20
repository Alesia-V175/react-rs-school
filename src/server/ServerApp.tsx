import { PipeableStream, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import store from '../client/src/redux/store';
import App from '../client/src/App';

const ServerApp = (url: string, opts?: object): PipeableStream => {
  return renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
    opts,
  );
};

export default ServerApp;
