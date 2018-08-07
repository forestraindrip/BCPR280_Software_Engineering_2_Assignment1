let guesser1 = new Vue({
  el: "#guesser1",
  data: {
    inputNumber: null,
    actualNumber: null,
    counter: 0,
    displayMessage: ''
  },
  methods: {
    getNumber: () => {
      return guesser1.actualNumber;
    },
    setup: () => {
      guesser1.displayMessage = 'New Game'
      guesser1.counter = 0;
      guesser1.actualNumber = Math.floor(Math.random() * 100);
      guesser1.getInputNumber()
      document.getElementById('numberInput').removeAttribute('disabled')
    },
    compareNumber: () => {
      var message = "";
      guesser1.getInputNumber()
      guesser1.counter++;
      // debugger
      if (guesser1.inputNumber === guesser1.actualNumber) {
        message = `You got it in ${guesser1.counter} trials`;
        document.getElementById('numberInput').setAttribute('disabled','disabled')
      } else if (guesser1.inputNumber > guesser1.actualNumber) {
        message = `Try lower`;
      } else if (guesser1.inputNumber < guesser1.actualNumber) {
        message = `Try higher`;
      }
      guesser1.displayMessage = message;
    },
    getInputNumber: ()=>{
      guesser1.inputNumber = parseInt(document.getElementById('numberInput').value)
    }
  }
});
