TRESHOLD = 512
DELAY = 1000
valueX = 2
valueY = 2
replot(2, 2)
je_nakloneny = False
doba_nakloneni = 0
tiltDirection = 0

def on_forever():

    global valueX
    global valueY
    global je_nakloneny
    global doba_nakloneni

    tiltDirection = input.acceleration(Dimension.X) #vychýlenost osy x

    if abs(tiltDirection) >= TRESHOLD:
        if je_nakloneny == True:
            if control.millis() - doba_nakloneni > DELAY:
                if tiltDirection > 0:
                    valueX = valueX +1

                else:
                    valueX = valueX -1
    
    else:
        je_nakloneny = True
        doba_nakloneni = control.millis()
        if control.millis() - doba_nakloneni > DELAY:
            if tiltDirection > 0:
                valueX = valueX + 1

            else:
                valueX = valueX -1

    valueX = Math.constrain(valueX, 0, 4)
basic.forever(on_forever)
console.log_value("", valueX)
def replot(x = valueX, y = valueY):
    basic.clear_screen()
    led.plot(x, y)