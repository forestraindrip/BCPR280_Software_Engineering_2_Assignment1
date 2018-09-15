/* global Guesser1 */
let viewModel = {// eslint-disable-line no-unused-vars
  el: "",
  data: {
    actualNumber: null,
    displayMessage: null,
    inputNumber: '???',
    guesser: null,
    isSeen: true,
    // isSeen: false,
    userResponse: null,
    guessNumber: null
  },
  methods: {
    setup: function(input) {
      this.guesser.setup(input)
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
    },
    app3Setup(){
      this.guesser.setup(this)
      this.userResponse = null
      this.guessNumber = this.guesser.getGuessNumber()
      this.displayMessage = `This Is A New Game. I guess the number is ${this.guessNumber}`
    },
	  replyUserResponse: function () {
      this.displayMessage = this.guesser.compareNumber(this.userResponse)
    },
    app4Setup: function(){
      this.app3Setup()
    }
  }
}
