input.onButtonPressed(Button.A, function () {
    fair_game = randint(1, 10)
    if (fair_game == 1) {
    	
    } else if (fair_game == 1) {
    	
    } else if (fair_game == 1) {
    	
    } else if (fair_game == 1) {
    	
    } else if (fair_game == 1) {
    	
    } else if (fair_game == 1) {
    	
    } else if (fair_game == 1) {
    	
    } else if (fair_game == 1) {
    	
    } else if (fair_game == 1) {
    	
    } else {
    	
    }
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
})
let fair_game = 0
basic.showString("Hello!")
