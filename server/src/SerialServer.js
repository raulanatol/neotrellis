import {SerialPort} from "serialport";

export class SerialServer {
  app;
  serialPort;
  port;

  constructor(serialPort, app) {
    this.serialPort = serialPort;
    this.app = app;
  }

  start() {
    return new Promise((resolve, reject) => {
      this.port = new SerialPort({
        path: this.serialPort,
        baudRate: 115200,
      });

      this.port.on('open', () => {
        console.log('*** Port open ***');
        this.port.on('data', (data) => {
          this.processEvent(data.toString());
        });
        resolve();
      });

      this.port.on('error', console.error);
    });
  }

  write(message) {
    this.port.write(message);
  }

  processEvent(event) {
    if (event.startsWith('CLICK=')) {
      const time = event.split('CLICK=')[1].trim();
      // this.app.setTimer(time);
      this.write('HELLO', time);
    }
    console.log("-----");
    console.log(event);
  }
}
