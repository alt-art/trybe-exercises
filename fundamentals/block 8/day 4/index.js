const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle));
});

function sumArray(...args) {
  return args.reduce((acc, curr) => acc + curr);
}

// console.log(sumArray(1, 2, 3));

assert.equal(sumArray(1, 2, 3), 6);

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = (obj) => {
  const { name, age, likes } = obj;
  return `${name} is ${age} years old and likes ${likes.join(', ')}.`;
};

assert.equal(personLikes(alex), 'Alex is 26 years old and likes fly fishing.');
assert.equal(
  personLikes(gunnar),
  'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'
);

// console.log(personLikes(alex));
// console.log(personLikes(gunnar));

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterAustralianBornInXXExpectedResult = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
];

function filterAustralianBornInXX() {
  return people.filter((person) => {
    const { bornIn, nationality } = person;
    return bornIn >= 1901 && bornIn <= 2000 && nationality === 'Australian';
  });
}

assert.deepEqual(filterAustralianBornInXX(), filterAustralianBornInXXExpectedResult);

// console.log(filterAustralianBornInXX());

const myList = [3, 2, 1, 3, 5, 6, 7, 8, 9, 10];

function reverseArray(arr) {
  return arr.reverse();
}

assert.deepEqual(reverseArray(myList), [10, 9, 8, 7, 6, 5, 3, 1, 2, 3]);

// console.log(myList);

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

function toObject(car) {
  const [brand, model, year] = car;
  return {
    brand,
    model,
    year,
  };
}

assert.deepEqual(toObject(palio), { brand: 'Palio', model: 'Fiat', year: 2019 });
assert.deepEqual(toObject(shelbyCobra), { brand: 'Shelby Cobra', model: 'Ford', year: 1963 });
assert.deepEqual(toObject(chiron), { brand: 'Chiron', model: 'Bugatti', year: 2016 });

// console.log(toObject(palio));
// console.log(toObject(shelbyCobra));
// console.log(toObject(chiron));

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

function shipLength(ship) {
  const {name, length, measurementUnit } = ship;
  return `${name} is ${length} ${measurementUnit} long`;
}

assert.equal(shipLength(ships[0]), 'Titanic is 269.1 meters long');
assert.equal(shipLength(ships[1]), 'Queen Mary 2 is 1132 feet long');
assert.equal(shipLength(ships[2]), 'Yamato is 256 meters long');

// console.log(shipLength(ships[0]));
// console.log(shipLength(ships[1]));
// console.log(shipLength(ships[2]));

function greet(name, greeting = 'Hi') {
  return `${greeting} ${name}`;
}

assert.equal(greet('Alex'), 'Hi Alex');
assert.equal(greet('John', 'Good morning'), 'Good morning John');
assert.equal(greet('Isabela', 'Oi'), 'Oi Isabela');

console.log(greet('John'))
console.log(greet('John', 'Good morning'))
console.log(greet('Isabela', 'Oi'))
