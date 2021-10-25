const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr));
}

assert.deepEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// console.log(flatten());

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const reduceNamesExpectedResult =
  'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.';

function reduceNames() {
  return books.map((book) => book.author.name).join(', ') + '.';
}

assert.equal(reduceNames(), reduceNamesExpectedResult);

// console.log(reduceNames());

const averageAgeExpectedResult = 43;

function averageAge() {
  return (
    books.reduce(
      (acc, curr) => acc + curr.releaseYear - curr.author.birthYear,
      0
    ) / books.length
  );
}

assert.equal(averageAge(), averageAgeExpectedResult);

// console.log(averageAge());

const longestNamedBookExpectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((acc, curr) =>
    curr.name.length > acc.name.length ? curr : acc
  );
}

assert.deepEqual(longestNamedBook(), longestNamedBookExpectedResult);

// console.log(longestNamedBook());

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) => curr.match(/[A-a]/g).length + acc, 0);
}

assert.equal(containsA(), 20);

// console.log(containsA());

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const studentAverageExpected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

function studentAverage() {
  return students.map((student, index) => ({
    name: student,
    average:
      grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length,
  }));
}

assert.deepEqual(studentAverage(), studentAverageExpected);

// console.log(studentAverage());
