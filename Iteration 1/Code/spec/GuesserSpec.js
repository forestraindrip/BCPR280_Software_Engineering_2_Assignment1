describe("Guesser", function() {
  var guesser;
  beforeEach(function() {
    guesser = new Guesser();
    guesser.setup();
  });
  it("should be a number between 0 to 99", function() {
    let theNumber = guesser.getNumber();
    expect(0 <= theNumber && theNumber < 100);
  });
});
