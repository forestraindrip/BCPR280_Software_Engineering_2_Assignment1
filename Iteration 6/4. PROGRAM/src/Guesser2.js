/*global Guesser1 */
class Guesser2 extends Guesser1 {// eslint-disable-line no-unused-vars
  constructor() {
    super();
    this._inputNumber = super._inputNumber;
    this.actualNumber = super.actualNumber;
    this.counter = super.counter;
    this.inputBox = super.inputBox;
  }

  get inputNumber() {
    return super.inputNumber;
  }
  set inputNumber(input) {
    super.inputNumber =input;
  }

  getActualNumber() {
    return super.getActualNumber();
  }

  setup(inputBoxID) {
    super.setup(inputBoxID)

  }
  compareNumber() {
    this.setInputNumber()
    let message = "";
    this.counter++;
    let difference = Math.abs(this.inputNumber - this.actualNumber);

    if (40 <= difference) {
      message = "Cold";
    } else if (20 <= difference && difference <= 39) {
      message = "Cool";
    } else if (10 <= difference && difference <= 19) {
      message = "Warm";
    } else if (1 <= difference && difference <= 9) {
      message = "Hot";
    } else if (difference === 0) {
      message = `You got it in ${this.counter} trials`;
    }
    else{alert(`Error`)}
    return message;
  }

  setInputNumber() {
    super.setInputNumber()
  }
}
