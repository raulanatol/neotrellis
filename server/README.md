# NodeJS Server to serial communication

## Looking for port address

```shell
ls /dev/tty.*

```

The address will be something like `/dev/tty.usbmodemXYZ`

## Running the server

```shell
node server.js /dev/tty.usbmodemXYZ
```
