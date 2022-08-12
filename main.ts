input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    hoverbit.servo_angle(-45, list_servo.S1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Butterfly)
    hoverbit.servo_angle(0, list_servo.S1)
    hoverbit.servo_angle(0, list_servo.S2)
})
input.onButtonPressed(Button.B, function () {
    if (Direction_left) {
        hoverbit.servo_angle(45, list_servo.S2)
        Direction_left = 0
    } else {
        hoverbit.servo_angle(-45, list_servo.S2)
        Direction_left = 1
    }
    basic.showLeds(`
        # # # . .
        # . # . .
        # # # # .
        # . . . #
        # # # # .
        `)
})
let Direction_left = 0
let Direction_right = 0
Direction_left = 0
hoverbit.servo_angle(0, list_servo.S1)
hoverbit.servo_angle(0, list_servo.S2)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
