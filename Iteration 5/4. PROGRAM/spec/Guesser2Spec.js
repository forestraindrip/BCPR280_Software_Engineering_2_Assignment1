/* global describe,it,expect,viewModel,Vue,Guesser2 */

describe('guesser2', () => {
  let viewModel2 = JSON.parse(JSON.stringify(viewModel))
  viewModel2.el = '#guesser2Div'
  viewModel2.methods = { ...viewModel.methods }
  viewModel2.data.guesser = new Guesser2()
  let theGuesser2 = new Vue(viewModel2).guesser

  theGuesser2.setup()

  it('should generate a number between 0 and 99.', () => {
    let counter = 0
    for (let i = 0; i < 100; i++) {
      let theNumber = theGuesser2.getActualNumber()
      if (theNumber >= 0 && theNumber <= 99) {
        counter += 1
      }
    }
    expect(counter).toEqual(100)
  })

  describe('guesser2.inputNumber', () => {
    it(`should have the inputNumber equal 99 if the input larger than 99`, () => {
      let counter = 0
      for (let n = 100; n < 1000; n++) {
        theGuesser2.inputNumber = n
        if (theGuesser2.inputNumber === 99) {
          counter += 1
        }
      }
      expect(counter).toEqual(900)
    })

    it(`should have the inputNumber equal 0 if the input is smaller than 0`, () => {
      let counter = 0
      for (let n = -1; n >= -1000; n--) {
        theGuesser2.inputNumber = n
        if (theGuesser2.inputNumber === 0) {
          counter += 1
        }
      }
      expect(counter).toEqual(1000)
    })
  })
  describe(`guesser2.compareNumber`, () => {
    describe(`Test1`, () => {
      theGuesser2.setup()
      theGuesser2.actualNumber = 0
      let coldCounter = 0
      let coolCounter = 0
      let warmCounder = 0
      let hotCounter = 0
      let counter = 0
      let answer = ''
      for (let n = 999; n >= 0; n--) {
        theGuesser2.inputNumber = n
        counter++
        answer = theGuesser2.compareNumber()
        if (answer === `Cold`) coldCounter++
        // 960
        else if (answer === `Cool`) coolCounter++
        // 20
        else if (answer === `Warm`) warmCounder++
        // 10
        else if (answer === `Hot`) hotCounter++
        // 9
        else if (answer === `You got it in ${counter} trials`);
      }

      it(`should return 'Cold' if the guess is more than 40 from the actual number`, () => {
        expect(coldCounter).toEqual(960)
      })
      it(`should return 'Cool' if the guess is within 20 to 39 from the actual number`, () => {
        expect(coolCounter).toEqual(20)
      })
      it(`should return 'Warm' if the guess is within 10 to 19 from the actual number`, () => {
        expect(warmCounder).toEqual(10)
      })
      it(`should return 'Hot' if the guess is within 1 to 9 from the actual number`, () => {
        expect(hotCounter).toEqual(9)
      })
      it(`should return "You got it in n trials"`, () => {
        expect(answer).toBe(`You got it in ${counter} trials`)
      })
    })

    describe(`Test2`, () => {
      theGuesser2.setup()
      theGuesser2.actualNumber = 99
      let coldCounter = 0
      let coolCounter = 0
      let warmCounder = 0
      let hotCounter = 0
      let counter = 0
      let answer = ''
      for (let n = -100; n <= 99; n++) {
        theGuesser2.inputNumber = n
        counter++
        answer = theGuesser2.compareNumber()
        if (answer === `Cold`) coldCounter++
        // 960
        else if (answer === `Cool`) coolCounter++
        // 20
        else if (answer === `Warm`) warmCounder++
        // 10
        else if (answer === `Hot`) hotCounter++
        // 9
        else if (answer === `You got it in ${counter} trials`);
      }

      it(`should return 'Cold' if the guess is more than 40 from the actual number`, () => {
        expect(coldCounter).toEqual(160)
      })
      it(`should return 'Cool' if the guess is within 20 to 39 from the actual number`, () => {
        expect(coolCounter).toEqual(20)
      })
      it(`should return 'Warm' if the guess is within 10 to 19 from the actual number`, () => {
        expect(warmCounder).toEqual(10)
      })
      it(`should return 'Hot' if the guess is within 1 to 9 from the actual number`, () => {
        expect(hotCounter).toEqual(9)
      })
      it(`should return "You got it in n trials"`, () => {
        expect(answer).toBe(`You got it in ${counter} trials`)
      })
    })
  })
})
