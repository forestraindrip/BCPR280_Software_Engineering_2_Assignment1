let guesser1 = new Vue({ // eslint-disable-line no-unused-vars
  el: "#guesser1",
  data: {
    inputNumber: 51,
    actualNumber: null,
    counter: 0
  },
  methods: {
    getNumber: () => {
      return guesser1.actualNumber;
    },
    setup: () => {
      guesser1.counter = 0;
      guesser1.actualNumber = Math.floor(Math.random() * 100);
    },
    compareNumber: () => {
      guesser1.counter++;
      if (guesser1.inputNumber === guesser1.actualNumber) {
        return `You got it in ${guesser1.counter} trials`;
      } else if (guesser1.inputNumber > guesser1.actualNumber) {
        return `Try lower`;
      } else if (guesser1.inputNumber < guesser1.actualNumber) {
        return `Try higher`;
      }
    }
  }
});

