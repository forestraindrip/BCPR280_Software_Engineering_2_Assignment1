describe("guesser1", () => {
  let theGuesser1 = controller.guesser1;
  theGuesser1.setup();
  let numberInput = document.getElementById("numberInput");

  it("should have a number between 0 to 99", () => {
    let theNumber = theGuesser1.getActualNumber();
    expect(theNumber).toBeTruthy(0 <= theNumber && theNumber < 100);
  });

  describe(`guesser1.compareNumber`, () => {
    it(`should return "Try lower"`, () => {
      theGuesser1.actualNumber = 51;
      expect(theGuesser1.compareNumber(52)).toEqual(`Try lower`);
    });

    it(`should return "Try higher"`, () => {
      theGuesser1.actualNumber = 51;
      expect(theGuesser1.compareNumber(49)).toEqual(`Try higher`);
    });
    it(`should return "You got it in 7 trials"`, () => {
      theGuesser1.setup();
      theGuesser1.actualNumber = 0;
      theGuesser1.compareNumber(50);

      theGuesser1.compareNumber(25);

      theGuesser1.compareNumber(12);

      theGuesser1.compareNumber(6);

      theGuesser1.compareNumber(3);

      theGuesser1.compareNumber(1);

      expect(theGuesser1.compareNumber(0)).toEqual(`You got it in 7 trials`);
    });
  });
});

describe("guesser2", () => {});

describe("guesser3", () => {});

describe("guesser4", () => {});
