/* global Guesser1 */
let viewModel = { // eslint-disable-line no-unused-vars
  el: "#guesser1Div",
  data: {
    guessNumber: null,
    actualNumber: null,
    displayMessage: null,
    inputNumber: null,
    guesser: new Guesser1()
  },
  methods: {
    setup: function () {
      this.guesser.setup();
      this.getActualNumber();
      this.guessNumber = NaN;
      this.displayMessage = "This Is A New Game";
    },
    compareNumber: function () {
      this.guesser.setInputNumber() 
      this.displayMessage = this.guesser.compareNumber();
      this.inputNumber = this.guesser.inputNumber;
    },

    getActualNumber: function () {
      this.actualNumber = this.guesser.getActualNumber();
    }
  }
};