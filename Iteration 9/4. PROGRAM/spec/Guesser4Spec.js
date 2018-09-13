/* global describe,it,expect,viewModel,Vue,Guesser */
describe("guesser4", () => {
  let viewModel3 = JSON.parse(JSON.stringify(viewModel))
  viewModel3.el = "#guesser4Div"
  viewModel3.methods = { ...viewModel.methods }
  viewModel3.data.guesser = new Guesser4()
  let theGuesser4 = new Vue(viewModel3).guesser

  function randomInt(high, low) {
    return Math.floor(Math.random() * (high - low + 1) + low)
  }
  beforeEach(() => {
    theGuesser4.setup()
  })
  describe("guesser4.upperLimit", () => {
    it("should have .upperLimit", () => {
      expect(theGuesser4.hasOwnProperty("upperLimit")).toBeTruthy()
    })
    it("should be equal 99", () => {
      expect(theGuesser4.upperLimit).toEqual(99)
    })
  })
  describe("guesser4.lowerLimit", () => {
    it("should have .lowerLimit", () => {
      expect(theGuesser4.hasOwnProperty("lowerLimit")).toBeTruthy()
    })
    it("should be equal 0", () => {
      expect(theGuesser4.lowerLimit).toEqual(0)
    })
  })

  describe("guesser4.guessNumber", () => {
    it("should initiate a guess number: 0.", () => {
      let counter = 0
      for (let i = 0; i < 100; i++) {
        let theGuessNumber = theGuesser4.guessNumber
        if (theGuessNumber === 0) {
          counter += 1
        }
      }
      expect(counter).toEqual(100)
    })
  })

  describe(`guesser4.compareNumber`, () => {
    it(`should adjust its guessNumber when the user responds 'Cold'`, () => {
      let counter = 0
      for (let i = 0; i < 100; i++) {
        theGuesser4.setup()
        theGuesser4.guessNumber = randomInt(0, 59)
        let oldGuessNumber = theGuesser4.guessNumber
        theGuesser4.compareNumber("Cold")
        if (theGuesser4.guessNumber - oldGuessNumber === 40) counter++
      }
      expect(counter).toBe(100)
    })

    it(`should adjust its guessNumber when the user responds 'Cool'`, () => {
      let counter = 0
      for (let i = 0; i < 100; i++) {
        theGuesser4.setup()
        theGuesser4.guessNumber = randomInt(0, 69)
        let oldGuessNumber = theGuesser4.guessNumber
        theGuesser4.compareNumber("Cool")
        if (theGuesser4.guessNumber - oldGuessNumber === 20) counter++
      }
      expect(counter).toBe(100)
    })
    it(`should adjust its guessNumber when the user responds 'Warm'`, () => {
      let counter = 0
      for (let i = 0; i < 100; i++) {
        theGuesser4.setup()
        theGuesser4.guessNumber = randomInt(0, 89)
        let oldGuessNumber = theGuesser4.guessNumber
        theGuesser4.compareNumber("Warm")
        if (theGuesser4.guessNumber - oldGuessNumber === 10) counter++
      }
      expect(counter).toBe(100)
    })

    it(`should adjust its guessNumber when the user responds 'Hot'`, () => {
      let counter = 0
      for (let i = 0; i < 100; i++) {
        theGuesser4.setup()
        theGuesser4.guessNumber = randomInt(0, 98)
        let oldGuessNumber = theGuesser4.guessNumber
        theGuesser4.compareNumber("Hot")
        if (theGuesser4.guessNumber - oldGuessNumber === 1) counter++
      }
      expect(counter).toBe(100)
    })

    it(`should respond 'I got it in N trials'`, () => {
      let correctCounter = 0

      for (let actualNumber = 0; actualNumber < 100; actualNumber++) {
        //   debugger
        theGuesser4.setup()
        let timer = 0
        let userResponse = ""
        let answer = ""
        do {
          timer++
          // mimic user response
          let difference = actualNumber - theGuesser4.guessNumber
          if (difference === 0) userResponse = "Correct!"
          else if (difference >= 40) userResponse = "Cold"
          else if (difference >= 20) userResponse = "Cool"
          else if (difference >= 10) userResponse = "Warm"
          else if (difference >= 1) userResponse = "Hot"

          answer = theGuesser4.compareNumber(userResponse)
        } while (answer !== `I got it in ${timer} trials` && timer < 100)

        if (answer === `I got it in ${timer} trials`) correctCounter++
      }
      expect(correctCounter).toBe(100)
    })

    it(`should return "You lie!" when the user replies a coolder response after a hotter response`, () => {
       let lieCounter = 0
     
      for (let actualNumber = 0 ; actualNumber < 100; actualNumber++) {
        theGuesser4.setup()
        let timer = 0
        let userResponse = ""
        let answer = ""
        let answers = ["Cold", "Cool", "Warm", "Hot"]
        let indexCounter =  1000

        do {
            // debugger
          timer++
          indexCounter--
          // mimic user response
          let index = Math.round(indexCounter%3)
          userResponse = answers[index]
          answer = theGuesser4.compareNumber(userResponse)
        } while (answer !== `You lie!` && timer < 100)
        if (answer === `You lie!`) lieCounter++
        console.log(timer)
      }
      expect(lieCounter).toBe(100)
     })

    it(`should return "You lie!" when the user responds randomly`, () => {
      let lieCounter = 0

      for (let actualNumber = -150; actualNumber < 150; actualNumber++) {
        theGuesser4.setup()
        let timer = 0
        let userResponse = ""
        let answer = ""
        let answers = ["Cold", "Cool", "Warm", "Hot"]
        do {
          timer++
          // mimic user response
          let randomIndex = randomInt(0, 3)
          userResponse = answers[randomIndex]

          answer = theGuesser4.compareNumber(userResponse)
        } while (answer !== `You lie!` && timer < 100)
        if (answer === `You lie!`) lieCounter++
        // console.log(timer)
      }
      expect(lieCounter).toBe(300)
    })
  })
})
