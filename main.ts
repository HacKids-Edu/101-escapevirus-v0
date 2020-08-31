input.onButtonPressed(Button.A, function () {
    if (jogadorX > 0) {
        jogadorX = jogadorX - 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (jogadorX < 4) {
        jogadorX = jogadorX + 1
    }
})
let jogadorX = 0
let covidX = randint(0, 4)
let covidY = 0
jogadorX = randint(0, 4)
let jogadorY = 4
let gameover = false
basic.forever(function () {
    while (!(gameover)) {
        basic.clearScreen()
        led.plot(jogadorX, jogadorY)
        led.plot(covidX, covidY)
        if (covidY == 4 && covidX == jogadorX) {
            gameover = true
            basic.clearScreen()
            basic.showString("GAME OVER")
        }
        covidY = covidY + 1
        if (covidY == 5) {
            covidY = 0
            covidX = randint(0, 4)
        }
        basic.pause(500)
    }
})
