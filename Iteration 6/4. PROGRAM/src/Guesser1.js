class Guesser1 {
  // eslint-disable-line no-unused-vars
  constructor() {
    this._inputNumber = null;
    this.actualNumber = null;
    this.counter = 0;
    this.inputBox = null;
  }

  get inputNumber() {
    return this._inputNumber;
  }

  set inputNumber(input) {
    if (input < 0) {
      this._inputNumber = 0;
    } else if (99 < input) {
      this._inputNumber = 99;
    } else this._inputNumber = input;
  }

  getActualNumber() {
    return this.actualNumber;
  }

  setup(inputBoxID) {
    this.inputBox = document.getElementById(inputBoxID)
    this.inputBox.value = null
    //document.getElementById("numInputBtn").removeAttribute("disabled");
    this._inputNumber = null;
    this.counter = 0;
    this.actualNumber = Math.floor(Math.random() * 100);
  }

  compareNumber() {
    this.setInputNumber()
    let message = "";
    this.counter++;
    if (this.inputNumber === this.actualNumber) {
      message = `You got it in ${this.counter} trials`;
      //document.getElementById("numInputBtn").setAttribute("disabled", "disabled");
      //document.getElementById("numberInput").setAttribute("disabled", "disabled");
    } else if (this.inputNumber > this.actualNumber) {
      message = `Try lower`;
    } else if (this.inputNumber < this.actualNumber) {
      message = `Try higher`;
    }
    return message;
  }
  setInputNumber() {
    this.inputNumber = parseInt(
      this.inputBox.value
    );
  }
}
