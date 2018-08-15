describe("guesser1", () => {
  guesser1.setup();
  let numberInput = document.getElementById("numberInput")

  it("should have a number between 0 to 99", () => {
    let theNumber = guesser1.getActualNumber();
    expect(theNumber).toBeTruthy(0 <= theNumber && theNumber < 100);
  });

  describe(`guesser1.compareNumber`, () => {
    it(`should return "Try lower"`, () => {
      numberInput.value = '52';
      guesser1.actualNumber = 51;
      guesser1.compareNumber();
      expect(guesser1.displayMessage).toEqual(`Try lower`);
    });

    it(`should return "Try higher"`, () => {
      numberInput.value = '49'
      guesser1.actualNumber = 51;
      guesser1.compareNumber();
      expect(guesser1.displayMessage).toEqual(`Try higher`);
    });
    it(`should return "You got it in 7 trials"`, () => {
      guesser1.setup();
      numberInput.value = '50'
      guesser1.actualNumber = 0;
      guesser1.compareNumber();

      numberInput.value = '25'
      guesser1.compareNumber();

      numberInput.value = '12'
      guesser1.compareNumber();

      numberInput.value = '6'
      guesser1.compareNumber();

      numberInput.value = '3'
      guesser1.compareNumber();

      numberInput.value = '1'
      guesser1.compareNumber();

      numberInput.value = '0'
      guesser1.compareNumber();
      expect(guesser1.displayMessage).toEqual(`You got it in 7 trials`);
    });
  });
});

describe("guesser2", () => {});

describe("guesser3", () => {});

describe("guesser4", () => {});
