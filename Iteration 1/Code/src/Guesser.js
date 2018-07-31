class Guesser {
  constructor() {
    this.number;
  }
  generateNumber() {
    this.number = Math.floor(Math.random()*100)
  }

  getNumber() {
    return this.number;
  }
}
