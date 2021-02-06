input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(scoreX)
    basic.showString(":")
    basic.showNumber(scoreY)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(randint(2000, 10000))
    basic.showIcon(IconNames.Square)
    basic.pause(300)
    basic.clearScreen()
})
let scoreX = 0
let scoreY = 0
scoreY = 0
scoreX = 0
basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(500)
        basic.clearScreen()
        scoreX += 1
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.pause(500)
        basic.clearScreen()
        scoreY += 1
    }
})
