/* global describe,it,expect,viewModel,Vue,Guesser */
describe("guesser1", () => {
  let theGuesser1 = new Vue(viewModel).guesser;
  theGuesser1.setup();

  it("should generate a number between 0 and 99.", () => {
    let counter = 0;
    for (let i = 0; i < 100; i++) {
      let theNumber = theGuesser1.getActualNumber();
      if (0 <= theNumber && theNumber <= 99) {
        counter +=1;
      }
    }
    expect(counter).toEqual(100);
  });

  describe("guesser1.inputNumber", () => {
    it(`should have the inputNumber equal 99 if the input is 999`, () => {
      theGuesser1.inputNumber = 999;
      expect(theGuesser1.inputNumber).toEqual(99);
    });

    it(`should have the inputNumber equal 0 if the input is -999`, () => {
      theGuesser1.inputNumber = -999;
      expect(theGuesser1.inputNumber).toEqual(0);
    });
  });

  describe(`guesser1.compareNumber`, () => {
    it(`should return "Try lower"`, () => {
      theGuesser1.actualNumber = 0;
      theGuesser1.inputNumber = 1;
      expect(theGuesser1.compareNumber()).toEqual(`Try lower`);
    });

    it(`should return "Try higher"`, () => {
      theGuesser1.actualNumber = 99;
      theGuesser1.inputNumber = 98;
      expect(theGuesser1.compareNumber()).toEqual(`Try higher`);
    });
    it(`should return "You got it in 7 trials"`, () => {
      theGuesser1.setup();
      theGuesser1.actualNumber = 0;
      theGuesser1.inputNumber = 50;
      theGuesser1.compareNumber();

      theGuesser1.inputNumber = 25;
      theGuesser1.compareNumber();

      theGuesser1.inputNumber = 12;
      theGuesser1.compareNumber();

      theGuesser1.inputNumber = 6;
      theGuesser1.compareNumber();

      theGuesser1.inputNumber = 3;
      theGuesser1.compareNumber();

      theGuesser1.inputNumber = 1;
      theGuesser1.compareNumber();

      theGuesser1.inputNumber = 0;
      expect(theGuesser1.compareNumber()).toEqual(`You got it in 7 trials`);
    });
  });
});
