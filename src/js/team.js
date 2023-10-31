export default class Team {
  // Класс является итератором
  constructor(list) {
    this.members = new Set(list);
    this.count = 0;
  }

  * [Symbol.iterator]() { // создание генератора
    for (const item of this.members) {
      yield item;
    }
  }
}
