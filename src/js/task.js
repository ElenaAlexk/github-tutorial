// const value = 5;
// const value = 'bunny';
// console.log(value);

// const value;
// value = 10;
// console.log(value);

//console.log(Number(null));
// const min = Math.min(...[1, 5, -1, -10]);
// console.log(min);
// const name = 'bob';
// const age = 20;
// const obj = {
//   name,
//   age,
// };

// console.log(obj);
// const piece = {
//   x: 0,
//   y: 0,
//   move(x, y) {
//     this.x = x;
//     this.y = y;
//   },
// };

// piece.move(10, 10);
// console.log(piece);
// const [a, , b] = 'JavaScript is awesome'.split(' ');
// console.log(a, b);
// const {
//   name,
//   age,
//   gender = 'm',
//   hairColor: color,
// } = {
//   name: 'Jacob',
//   age: 20,
//   hairColor: 'blue',
// };

// console.log(name, age, gender, color);
// const dog = { name: 'Poly' };

// function showDogName() {
//   console.log(this.name);
// }

// const boundShowDogName = showDogName.bind(dog);
// boundShowDogName();
const userA = {
  name: 'Mango',
  age: 5,
};

const userB = {
  ...userA,
  age: 10,
  happy: true,
};

console.log(userB);
