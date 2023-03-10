import {HttpServer} from './src/httpServer.js';
import {SerialServer} from './src/serialServer.js';

const port = process.env.port || 3030;
const serialPort = process.env.serial || '/dev/tty.usbmodem324301';

class App {
  serialServer;
  httpServer;

  constructor(httpPort, serialPort) {
    this.serialServer = new SerialServer(serialPort, this);
    this.httpServer = new HttpServer(httpPort, this);
  }

  async start() {
    await this.httpServer.start();
    await this.serialServer.start();
  }

  setTimer(time) {
    console.log('server.js [14]', time);
  }
}

const server = new App(port, serialPort);
server.start()
  .then(console.log)
  .catch(console.error);
