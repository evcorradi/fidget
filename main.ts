input.onButtonPressed(Button.A, function () {
    basic.showNumber(1,10)
basic.showNumber(9,10)
basic.showNumber(10,10)
basic.showNumber(2,10)
basic.showNumber(3,10)
basic.showNumber(4,15)
basic.showNumber(5,16)
basic.showNumber(6,17)
basic.showNumber(7,19)
basic.showNumber(8,20)
fair_game = randint(1, 10)
    if (fair_game == 1) {
        basic.showNumber(1)
    } else if (fair_game == 2) {
        basic.showNumber(2)
    } else if (fair_game == 3) {
        basic.showNumber(3)
    } else if (fair_game == 4) {
        basic.showNumber(4)
    } else if (fair_game == 5) {
        basic.showNumber(5)
    } else if (fair_game == 6) {
        basic.showNumber(6)
    } else if (fair_game == 7) {
        basic.showNumber(7)
    } else if (fair_game == 8) {
        basic.showNumber(8)
    } else if (fair_game == 9) {
        basic.showNumber(9)
    } else {
        basic.showNumber(10)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 80; index++) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.InBackground)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 20; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . # . . #
        # # # # #
        . # # # #
        . . # # #
        . . . # .
        `)
    basic.showLeds(`
        . # . . #
        . # # # .
        . # # # #
        # . # # .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # # # .
        # . # . #
        # . . # .
        . . . . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("yay you know directions now :)")
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        # . . . .
        . # # # .
        # . # . #
        # . . # .
        . . . . .
        `)
    basic.showLeds(`
        . # . . #
        . # # # .
        . # # # #
        # . # # .
        . . . . .
        `)
    basic.showLeds(`
        . # . . #
        # # # # #
        . # # # #
        . . # # #
        . . . # .
        `)
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.showString("tilt left")
})
let fair_game = 0
basic.showString("Hello!")
basic.clearScreen()
