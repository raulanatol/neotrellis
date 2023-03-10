import http from 'node:http';

export class HttpServer {
  app;
  port;
  res;

  constructor(port, app) {
    this.port = port;
    this.app = app;
  }

  jsonResponse(message) {
    this.res.writeHead(200, {'Content-Type': 'application/json'});
    this.res.end(JSON.stringify(message));
  }

  start() {
    return new Promise((resolve, reject) => {
      const server = http.createServer((req, res) => {
        this.res = res;
        if (req.url.includes('/clock/')) {
          const time = req.url.split('/clock/')[1];
          this.app.setTimer(time);
          this.jsonResponse({result: 'ok'});
          return;
        }

        this.jsonResponse({result: 'Hello world!'});
      });

      server.listen(this.port, '127.0.0.1', () => {
        console.log(`Server running at http://127.0.0.1:${this.port}`);
        resolve();
      });
    });
  }
}
