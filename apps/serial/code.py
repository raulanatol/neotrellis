#import usb_cdc

buffer = ""
serial = usb_cdc.console

def read_serial(serial):
    available = serial.in_waiting
    while available:
        raw = serial.read(available)
        text = raw.decode("utf-8")
        available = serial.in_waiting
    return text

current_press = set()
while True:
    buffer += read_serial(serial)
    if buffer.endswith("\n"):
        # strip line end
        input_line = buffer[:-1]
        # clear buffer
        buffer = ""
        # handle input
        print(input_line)