/* global Guesser1 */
let viewModel = {
  // eslint-disable-line no-unused-vars
  el: "",
  data: {
    guessNumber: null,
    actualNumber: null,
    displayMessage: null,
    inputNumber: null,
    guesser: null,
    isSeen: true
    // isSeen: false
  },
  methods: {
    setup: function(inputBoxID) {
      this.guesser.setup(inputBoxID)
      this.getActualNumber()
      this.guessNumber = NaN
      this.displayMessage = "This Is A New Game"
    },
    compareNumber: function() {
      this.displayMessage = this.guesser.compareNumber()
      this.inputNumber = this.guesser.inputNumber
    },

    getActualNumber: function() {
      this.actualNumber = this.guesser.getActualNumber()
    }
  }
}
