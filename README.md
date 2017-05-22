# node-serialport poc

Just a little test which writes to an RPi Zero in 'g_serial' mode via a serial-over-USB connection.

## Setup

```
sudo modeprobe g_serial

# Deactivate echo for serial port
stty -F /dev/ttyGS0 -echo
```

## Test

To write to the raspberry:

```
# On RPi:
cat /dev/ttyGS0

# On Host:
node index.js

# RPi should print 'foo'
```

Test writing to the host:

```
# On Host:
node index.js

# On RPi:
echo "foo" > /dev/ttyGS0

# Host should print 'foo'
```


