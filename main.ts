input.onGesture(Gesture.ScreenDown, function on_gesture_screen_down() {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    basic.clearScreen()
    radio.sendNumber(102)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    control.reset()
})
radio.setGroup(2)
