/* global describe,it,expect,viewModel,Vue,Guesser */
describe("guesser3", () => {
  let viewModel3 = JSON.parse(JSON.stringify(viewModel))
  viewModel3.el = "#guesser3Div"
  viewModel3.methods = { ...viewModel.methods }
  viewModel3.data.guesser = new Guesser3()
  let theGuesser3 = new Vue(viewModel3).guesser

  function randomInt(high, low) {
    return Math.floor(Math.random() * (high - low + 1) + low)
  }

  beforeEach(() => {
    theGuesser3.setup()
  })
  describe("guesser3.upperLimit", () => {
    it("should have .upperLimit", () => {
      expect(theGuesser3.hasOwnProperty("upperLimit")).toBeTruthy()
    })
    it("should equal 99", () => {
      expect(theGuesser3.upperLimit).toEqual(99)
    })
  })
  describe("guesser3.lowerLimit", () => {
    it("should have .lowerLimit", () => {
      expect(theGuesser3.hasOwnProperty("lowerLimit")).toBeTruthy()
    })
    it("should equal 0", () => {
      expect(theGuesser3.lowerLimit).toEqual(0)
    })
  })

  describe("guesser3.guessNumber", () => {
    it("should initiate a guess number: 50.", () => {
      let counter = 0
      for (let i = 0; i < 100; i++) {
        let theGuessNumber = theGuesser3.guessNumber
        if (theGuessNumber === 50) {
          counter += 1
        }
      }
      expect(counter).toEqual(100)
    })
  })

  describe(`guesser3.compareNumber`, () => {
    it(`should guess higher number when the user responds 'Try Higher'`, () => {
      let counter = 0
      for (let i = 0; i < 100; i++) {
        theGuesser3.setup()
        theGuesser3.guessNumber =randomInt(0,98)
        let oldGuessNumber = theGuesser3.guessNumber
        theGuesser3.compareNumber("Try Higher")
        if (theGuesser3.guessNumber > oldGuessNumber) counter++
      }
      expect(counter).toBe(100)
    })

    it(`should guess lower number when the user responds 'Try Lower'`, () => {
      let counter = 0
      for (let i = 0; i < 100; i++) {
        theGuesser3.setup()
        theGuesser3.guessNumber = randomInt(1,99)
        // debugger
        let oldGuessNumber = theGuesser3.guessNumber
        theGuesser3.compareNumber("Try Lower")
        if (theGuesser3.guessNumber < oldGuessNumber) counter++
      }
      expect(counter).toBe(100)
    })

    it(`should respond 'I got it in N trials'`, () => {
      let correctCounter = 0

      for (let actualNumber = 0; actualNumber < 100; actualNumber++) {
        theGuesser3.setup()
        let timer = 0
        let userResponse = ""
        let answer = ""
        do {
          timer++
          // mimic user response
          if (actualNumber === theGuesser3.guessNumber)
            userResponse = "Correct!"
          else if (actualNumber < theGuesser3.guessNumber)
            userResponse = "Try Lower"
          else if (actualNumber > theGuesser3.guessNumber)
            userResponse = "Try Higher"

          answer = theGuesser3.compareNumber(userResponse)
        } while (answer !== `I got it in ${timer} trials` && timer < 100)

        if (answer === `I got it in ${timer} trials`) correctCounter++
      }
      expect(correctCounter).toBe(100)
    })

    it(`should return "You lie!" when the user lies`, () => {
      let lieCounter = 0

      for (let actualNumber = -150; actualNumber < 150; actualNumber++) {
        theGuesser3.setup()
        let timer = 0
        let userResponse = ""
        let answer = ""
        do {
          timer++
          // mimic user response
          if (actualNumber <= theGuesser3.guessNumber)
            userResponse = "Try Higher"
          else if (actualNumber >= theGuesser3.guessNumber)
            userResponse = "Try Lower"

          answer = theGuesser3.compareNumber(userResponse)
        } while (answer !== `You lie!` && timer < 100)

        if (answer === `You lie!`) lieCounter++
      }
      expect(lieCounter).toBe(300)
    })
  })
})
