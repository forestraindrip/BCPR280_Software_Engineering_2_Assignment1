/* global Guesser1, alert */
class Guesser3 extends Guesser1 {
  // eslint-disable-line no-unused-vars
  constructor() {
    super()
    this.counter = super.counter
    this.guessNumber = null
    this.userResponse = ""
    this.lowerLimit = null
    this.upperLimit = null
  }

  setup() {
    this.userResponse = ""
    this.counter = 0
    this.guessNumber = 50
    this.lowerLimit = 0
    this.upperLimit = 99
  }
  compareNumber(userResponse) {
    this.counter++
    this.userResponse = userResponse
    let message = this.analyseUserResponse(this.userResponse)
    // debugger
    return message
  }
  getGuessNumber() {
    return this.guessNumber
  }

  calculateGuessNumber() {
    this.guessNumber = Math.floor((this.upperLimit + this.lowerLimit) / 2)
    console.log(
      `up:${this.upperLimit}, low:${this.lowerLimit}, guess:${this.guessNumber}`
    )
  }

  analyseUserResponse(userResponse) {
    let response = ""

    if (userResponse === "Correct!") {
      response = `I got it in ${this.counter} trials`
      return response
    } else if (userResponse === "Try Lower") {
      this.upperLimit = this.guessNumber - 1
    } else if (userResponse === "Try Higher") {
      this.lowerLimit = this.guessNumber + 1
    }

    this.calculateGuessNumber()

    if (this.isUserHonest()) {
      response = `Is it ${this.guessNumber}?`
    } else response = "You lie!"
    return response
  }

  isUserHonest() {
    if (
      this.guessNumber < this.lowerLimit ||
      this.upperLimit < this.guessNumber ||
      this.upperLimit < this.lowerLimit
    )
      return false
    else return true
  }
}
