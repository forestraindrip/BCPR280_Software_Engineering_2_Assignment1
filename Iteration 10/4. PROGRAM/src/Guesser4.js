/* global Guesser3, alert */
class Guesser4 extends Guesser3 {
  constructor() {
    super()
    this.counter = super.counter
    this.guessNumber = super.guessNumber
    this.userResponse = super.userResponse
    this.lowerLimit = super.lowerLimit
    this.upperLimit = super.upperLimit
    this.gap = 40
    this.oldGap = 40
  }

  setup() {
    super.setup()
    this.guessNumber = 0
    this.gap = 40
    this.oldGap = 40
  }

  compareNumber(userResponse) {
    this.counter++
    this.userResponse = userResponse
    let message = this.analyseUserResponse(this.userResponse)
    // debugger
    return message
  }

  getGuessNumber() {
    return super.getGuessNumber()
  }

  calculateGuessNumber(userResponse) {
    this.oldGap = this.gap
    if (userResponse === "Cold") {
      this.guessNumber += 40
      this.gap = 40
    } else if (userResponse === "Cool") {
      this.guessNumber += 20
      this.gap = 20
    } else if (userResponse === "Warm") {
      this.guessNumber += 10
      this.gap = 10
    } else if (userResponse === "Hot") {
      this.guessNumber += 1
      this.gap = 1
    }
    this.lowerLimit = this.guessNumber
  }

  analyseUserResponse(userResponse) {
    let myResponse = ""

    if (userResponse === "Correct!") {
      myResponse = `I got it in ${this.counter} trials`
      return myResponse
    } else this.calculateGuessNumber(userResponse)

    if (this.isUserHonest()) {
      myResponse = `Is it ${this.guessNumber}?`
    } else myResponse = "You lie!"

    return myResponse
  }

  isUserHonest() {
    if (this.lowerLimit > this.upperLimit || this.gap > this.oldGap)
      return false
    else return true
  }
}
