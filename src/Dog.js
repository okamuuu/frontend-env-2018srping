export default class Dog {

  constructor(voice="bow wow") {
    this.voice = voice;
  }

  say() {
    return this.voice;
  }
}
