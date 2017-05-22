# node-serialport poc

Just a little test which writes to an RPi Zero in 'g_serial' mode via a serial-over-USB connection.

## Setup

```
sudo modeprobe g_serial
# Deactivate echo for serial port
stty -F /dev/ttyGS0 -echo
```