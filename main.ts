input.onButtonPressed(Button.A, function () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 52)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Forward, 49)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor4)
    Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    basic.clearScreen()
})
basic.showIcon(IconNames.Target)
