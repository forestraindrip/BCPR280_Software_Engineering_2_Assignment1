describe("guesser1", () => {
  let theGuesser1 = new Vue(viewModel).guesser;
  theGuesser1.setup();
  let numberInput = document.getElementById("numberInput");

  it("should have a number between 0 to 99", () => {
    let theNumber = theGuesser1.getActualNumber();
    expect(theNumber).toBeTruthy(0 <= theNumber && theNumber < 100);
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
      theGuesser1.actualNumber = 51;
      theGuesser1._inputNumber = 52;
      expect(theGuesser1.compareNumber()).toEqual(`Try lower`);
    });

    it(`should return "Try higher"`, () => {
      theGuesser1.actualNumber = 51;
      theGuesser1._inputNumber = 49;
      expect(theGuesser1.compareNumber()).toEqual(`Try higher`);
    });
    it(`should return "You got it in 7 trials"`, () => {
      theGuesser1.setup();
      theGuesser1.actualNumber = 0;
      theGuesser1._inputNumber = 50;
      theGuesser1.compareNumber();

      theGuesser1._inputNumber = 25;
      theGuesser1.compareNumber();

      theGuesser1._inputNumber = 12;
      theGuesser1.compareNumber();

      theGuesser1._inputNumber = 6;
      theGuesser1.compareNumber();

      theGuesser1._inputNumber = 3;
      theGuesser1.compareNumber();

      theGuesser1._inputNumber = 1;
      theGuesser1.compareNumber();

      theGuesser1._inputNumber = 0;
      expect(theGuesser1.compareNumber()).toEqual(`You got it in 7 trials`);
    });
  });
});

describe("guesser2", () => {});

describe("guesser3", () => {});

describe("guesser4", () => {});
