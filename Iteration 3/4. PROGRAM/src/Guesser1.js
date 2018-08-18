class Guesser1 {
  constructor() {
    this.inputNumber= null;
    this.actualNumber=null;
    this.counter = 0;
  }

  getActualNumber() {
    return this.actualNumber;
  }

  setup() {
    this.counter = 0;
    this.actualNumber = Math.floor(Math.random() * 100);
  }

  compareNumber(inputNumber) {
    var message = "";
    this.inputNumber = inputNumber;
    this.counter++;
    if (this.inputNumber === this.actualNumber) {
      message = `You got it in ${this.counter} trials`;
      document.getElementById("numInputBtn").setAttribute("disabled", "disabled");
      // document.getElementById("numberInput").setAttribute("disabled", "disabled");
    } else if (this.inputNumber > this.actualNumber) {
      message = `Try lower`;
    } else if (this.inputNumber < this.actualNumber) {
      message = `Try higher`;
    }
    return message;
  }
}
