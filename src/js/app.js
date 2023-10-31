import Character from './character';
import Team from './team';

const arrayName = ['Dizi', 'Mila', 'Ariela', 'Nika', 'Jane'];
const listTeam = [];
arrayName.forEach((item) => {
  const obj = new Character(item);
  console.log(obj.name, obj);
  listTeam.push(obj);
});

const team = new Team(listTeam);
console.log('Список команды противника', team);

const listUsers = team[Symbol.iterator]();

console.log('Первый:', listUsers.next().value);
console.log('Второй:', listUsers.next().value);

// console.log(listUsers.next().value);
// console.log(listUsers.next().value);
// console.log(listUsers.next().value);
// console.log(listUsers.next().value);
// console.log(listUsers.next().value);

for (const user of listUsers) {
  console.log('Следующий', user);
}
