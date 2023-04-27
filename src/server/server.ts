import express from 'express';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import { createServer as createViteServer } from 'vite';

const dirName = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (request, result, next) => {
    const url = request.originalUrl;

    try {
      let template = fs.readFileSync(
        path.resolve(dirName, 'index.html'),
        'utf-8',
      );

      template = await vite.transformIndexHtml(url, template);
      const html = template.split('<!--ssr-outlet-->');

      const { render } = await vite.ssrLoadModule('/src/server/entry-server.tsx');

      const { pipe } = await render(url, {
        onShellReady() {
          result.write(html[0]);
          pipe(result);
        },
        onAllReady() {
          result.write(html[0] + html[1]);
          result.end();
        },
      });
    } catch (e) {
      const error = e as Error;
      vite.ssrFixStacktrace(error);
      next(error);
    }
  });

  app.listen(3000, () => console.log('Server is listening on port: 3000; http://localhost:3000/'));
}

createServer();
