class Guesser {
  constructor() {
    this.number = null;
  }
  setup() {
    this.number = Math.floor(Math.random()*100)
  }

  getNumber() {
    return this.number;
  }
}
