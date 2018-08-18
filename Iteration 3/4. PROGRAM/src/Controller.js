let controller = new Vue({
  el: "#guesserDiv",
  data: {
    guessNumber: null,
    actualNumber: null,
    displayMessage: null,
    guesser1: new Guesser1()
  },
  methods: {
    setup: function() {
      document.getElementById("numInputBtn").removeAttribute("disabled");
      this.guesser1.setup();
      this.getActualNumber();
      document.getElementById("numberInputBox").value = null;
      this.guessNumber = NaN;
      this.displayMessage = "This Is A New Game";
    },
    compareNumber: function() {
      this.setInputNumber();
      this.displayMessage = this.guesser1.compareNumber(this.inputNumber);
    },
    setInputNumber: function() {
      this.inputNumber = parseInt(
        document.getElementById("numberInputBox").value
      );
    },
    getActualNumber: function() {
      this.actualNumber = this.guesser1.getActualNumber();
    }
  },
  computed: {
    inputNumber: {
      get() {
        return this.guessNumber;
      },
      set(input) {
        if (input < 0) {
          this.guessNumber = 0;
        } else if (99 < input) {
          this.guessNumber = 99;
        } else this.guessNumber = input;
      }
    }
  }
});
