
class Guesser1 { // eslint-disable-line no-unused-vars
  constructor() {
    this._inputNumber = null;
    this.actualNumber = null;
    this.counter = 0;
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

  setup() {
    document.getElementById("numberInputBox").value = null;
    //document.getElementById("numInputBtn").removeAttribute("disabled");
    this._inputNumber = null;
    this.counter = 0;
    this.actualNumber = Math.floor(Math.random() * 100);
  }

  compareNumber() {
    var message = "";
    this.counter++;
    if (this._inputNumber === this.actualNumber) {
      message = `You got it in ${this.counter} trials`;
      //document.getElementById("numInputBtn").setAttribute("disabled", "disabled");
      // document.getElementById("numberInput").setAttribute("disabled", "disabled");
    } else if (this._inputNumber > this.actualNumber) {
      message = `Try lower`;
    } else if (this._inputNumber < this.actualNumber) {
      message = `Try higher`;
    }
    return message;
  }
   setInputNumber() {
    this.inputNumber = parseInt(
      document.getElementById("numberInputBox").value
    );
  }
}