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

  port = new SerialPort(port.comName, {
    autoOpen: true,
    baudRate: 115200
  }, (err) => {
    if (err) {
      console.error("Couldnt open port", err);
      return;
    }

    let done = port.write('Foo!\n', () => { });
    if(done) {
      port.close();
    } else {
      port.drain(() => port.close());
    }
  });
})