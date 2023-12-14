input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Yes)
    Puntos += 1
    basic.pause(500)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Puntos)
    basic.pause(500)
})
let Puntos = 0
Puntos += 0
basic.forever(function () {
    basic.showLeds(`
        . # # # #
        . # . . #
        . . . # #
        . . # . .
        . . # . .
        `)
})
