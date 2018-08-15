let guesser1 = new Vue({
  el: "#guesser1",
  data: {
    inputNumber: null,
    actualNumber: null,
    counter: 0,
    displayMessage: ""
  },
  methods: {
    getActualNumber: function() {
      return this.actualNumber;
    },
    setup: function() {
      this.displayMessage = "New Game";
      this.counter = 0;
      this.actualNumber = Math.floor(Math.random() * 100);
      this.getInputNumber();
      document.getElementById("numberInput").removeAttribute("disabled");
    },
    compareNumber: function() {
      var message = "";
      this.getInputNumber();
      this.counter++;
      // debugger
      if (this.inputNumber === this.actualNumber) {
        message = `You got it in ${this.counter} trials`;
        document
          .getElementById("numberInput")
          .setAttribute("disabled", "disabled");
      } else if (this.inputNumber > this.actualNumber) {
        message = `Try lower`;
      } else if (this.inputNumber < this.actualNumber) {
        message = `Try higher`;
      }
      this.displayMessage = message;
    },
    getInputNumber: function() {
      this.inputNumber = parseInt(document.getElementById("numberInput").value);
    }
  }
});
