const arrayType = [
  { type: 'Bowman', attack: 25, defence: 25 },
  { type: 'Mag', attack: 10, defence: 40 },
  { type: 'Undead', attack: 20, defence: 30 },
  { type: 'Zombie', attack: 40, defence: 10 },
  { type: 'Daemon', attack: 10, defence: 40 },
];

export default class Character {
  constructor(name) {
    const obj = arrayType[Math.floor(Math.random() * arrayType.length)];
    this.name = name;
    this.type = obj.type;
    this.health = 50;
    this.level = 1;
    this.attack = obj.attack;
    this.defence = obj.defence;
  }
}
