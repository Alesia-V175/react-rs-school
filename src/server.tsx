import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import renderApp from '../dist/server/ServerApp.js';

// import { renderToString } from 'react-dom/server';

const folderName = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3001;

const html = fs.readFileSync(path.resolve(folderName, './dist/client.html')).toString();

const parts = html.split('not render');

const app = express();

app.use(express.static('dist'));

app.get('*', async (req, res) => {
  // const content = renderToString(renderApp());

  res.send({
    // renderTemplate({}),
  });
});

app.use((req, res) => {
  res.write(parts[0]);
  const stream = renderApp(req.url, {
    onShellReady() {
      stream.pipe(res);
    },
    onShellError() {
      // do error handling
    },
    onAllReady() {
      // last thing to write
      res.write(parts[1]);
      res.end();
    },
    onError() {
      // console.error(err);
    },
  });
});

// console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
