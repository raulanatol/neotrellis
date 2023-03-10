import time
import adafruit_trellism4
#import usb_cdc

BLACK = 0x000000

trellis = adafruit_trellism4.TrellisM4Express()

buffer = ""
# serial = usb_cdc.console

# Turn off all pixels
trellis.pixels.fill(BLACK)

# def read_serial(serial):
#     available = serial.in_waiting
#     while available:
#         raw = serial.read(available)
#         text = raw.decode("utf-8")
#         available = serial.in_waiting
#     return text

current_press = set()
while True:
    #buffer += read_serial(serial)
    #if buffer.endswith("\n"):
        # strip line end
        #input_line = buffer[:-1]
        # clear buffer
        #buffer = ""
        # handle input
        #print(input_line)
    pressed = set(trellis.pressed_keys)
    for press in pressed - current_press:
        if press:
            #print("Pressed:", press)
            x, y = press
            pixel = (press[1] * 8) + press[0]
            #if key_state[pixel] == colors:  # If we're at white
            #    key_state[pixel] = 0        #  Set back to black
            #else:
            #    key_state[pixel] += 1       # Use next color
            # Change the pushed pixel to the next color
            #trellis.pixels[x, y] = color_cycle[key_state[pixel]]
            print("CLICK=", pixel)
    time.sleep(0.08)
    current_press = pressed
    # a = trellis.read()
    # print('AAA', a)