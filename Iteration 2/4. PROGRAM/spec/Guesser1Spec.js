describe("guesser1", () => {
  guesser1.setup();

  it("should have a number between 0 to 99", () => {
    let theNumber = guesser1.getNumber();
    expect(theNumber).toBeTruthy(0 <= theNumber && theNumber < 100);
  });

  describe(`guesser1.compareNumber`, () => {
    it(`should return "Try lower"`, () => {
      guesser1.inputNumber = 52;
      guesser1.actualNumber = 51;
      guesser1.compareNumber();
      expect(guesser1.displayMessage).toEqual(`Try lower`);
    });

    it(`should return "Try higher"`, () => {
      guesser1.inputNumber = 49;
      guesser1.actualNumber = 51;
      guesser1.compareNumber();
      expect(guesser1.displayMessage).toEqual(`Try higher`);
    });
    it(`should return "You got it in 7 trials"`, () => {
      guesser1.setup();
      guesser1.actualNumber = 0;
      guesser1.inputNumber = 50;
      guesser1.compareNumber();
      guesser1.inputNumber = 25;
      guesser1.compareNumber();
      guesser1.inputNumber = 12;
      guesser1.compareNumber();
      guesser1.inputNumber = 6;
      guesser1.compareNumber();
      guesser1.inputNumber = 3;
      guesser1.compareNumber();
      guesser1.inputNumber = 1;
      guesser1.compareNumber();
      guesser1.inputNumber = 0;
      guesser1.compareNumber();
      expect(guesser1.displayMessage).toEqual(`You got it in 7 trials`);
    });
  });
});

describe("guesser2", () => {});

describe("guesser3", () => {});

describe("guesser4", () => {});
