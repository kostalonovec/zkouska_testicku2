let TRESHOLD = 512
let DELAY = 1000
let valueX = 2
let valueY = 2
replot(2, 2)
let je_nakloneny = false
let doba_nakloneni = 0
let tiltDirection = 0
basic.forever(function on_forever() {
    
    
    
    
    let tiltDirection = input.acceleration(Dimension.X)
    // vychýlenost osy x
    if (Math.abs(tiltDirection) >= TRESHOLD) {
        if (je_nakloneny == true) {
            if (control.millis() - doba_nakloneni > DELAY) {
                if (tiltDirection > 0) {
                    valueX = valueX + 1
                } else {
                    valueX = valueX - 1
                }
                
            }
            
        }
        
    } else {
        je_nakloneny = true
        doba_nakloneni = control.millis()
        if (control.millis() - doba_nakloneni > DELAY) {
            if (tiltDirection > 0) {
                valueX = valueX + 1
            } else {
                valueX = valueX - 1
            }
            
        }
        
    }
    
    valueX = Math.constrain(valueX, 0, 4)
})
console.logValue("", valueX)
function replot(x: number = valueX, y: number = valueY) {
    basic.clearScreen()
    led.plot(x, y)
}

