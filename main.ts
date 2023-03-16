input.onButtonPressed(Button.A, function () {
    count = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Catherine is the best")
})
input.onGesture(Gesture.Shake, function () {
    count += 1
    if (count != 3) {
        basic.showNumber(count)
    } else {
        count = 0
        hand = randint(1, 3)
        if (hand == 1) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.pause(2000)
            basic.showString("pase")
        } else if (hand == 2) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            basic.pause(2000)
            basic.showString("sten")
        } else {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
            basic.pause(2000)
            basic.showString("sax")
        }
    }
})
let hand = 0
let count = 0
count = 0
