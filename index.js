const SerialPort = require('serialport');

SerialPort.list((err, ports) => {
  if (err) {
    console.error("List failed", err);
    return;
  }

  // Vendor / Product ID can be changed through
  // kernel gadget config
  let port = ports.find((p) => p.vendorId === '0x0525');

  if (!port) {
    console.error("No port found.");
    return;
  }

  const portOpts = {
        baudRate: 9600,
        dataBits: 8,
        parity: 'none',
        stopBits: 1,
        parser: SerialPort.parsers.readline
      };

  port = new SerialPort(port.comName, portOpts);

  port.on('data', (line) => {
    console.log(line.toString().trim());
  });

  port.on('open', () => {
    port.write('hello\n');
  });

  port.on('error', (e) => console.error(e));
})