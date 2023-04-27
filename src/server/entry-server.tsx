import { PipeableStream, renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import store from '../client/src/redux/store';
import App from '../client/src/App';

export function render(url: string, options?: RenderToPipeableStreamOptions): PipeableStream {
  return renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options,
  );
}
