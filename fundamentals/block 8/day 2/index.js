const assert = require('assert');

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

const formattedBooksExpectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formattedBooksNames() {
  return books.map(
    (book) => `${book.name} - ${book.genre} - ${book.author.name}`
  );
}

assert.deepEqual(formattedBooksNames(), formattedBooksExpectedResult);

// console.log(formattedBooksNames());

const nameAndAgeExpectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  return books
    .map((book) => ({
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name,
    }))
    .sort((a, b) => a.age - b.age);
}

assert.deepEqual(nameAndAge(), nameAndAgeExpectedResult);

// console.log(nameAndAge());

const fantasyOrScienceFictionExpectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
];

function fantasyOrScienceFiction() {
  return books.filter(
    (book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
  );
}

assert.deepEqual(
  fantasyOrScienceFiction(),
  fantasyOrScienceFictionExpectedResult
);

// console.log(fantasyOrScienceFiction());

const oldBooksOrderedExpectedResult = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() {
  return books
    .filter((book) => book.releaseYear < 1961)
    .sort((a, b) => a.releaseYear - b.releaseYear);
}

assert.deepEqual(oldBooksOrdered(), oldBooksOrderedExpectedResult);

// console.log(oldBooksOrdered());

const fantasyOrScienceFictionAuthorsExpectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  return books
    .filter(
      (book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
    )
    .map((book) => book.author.name)
    .sort();
}

assert.deepEqual(
  fantasyOrScienceFictionAuthors(),
  fantasyOrScienceFictionAuthorsExpectedResult
);

// console.log(fantasyOrScienceFictionAuthors());

const oldBooksExpectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  return books
    .filter((book) => book.releaseYear < 1961)
    .map((book) => book.name);
}

assert.deepEqual(oldBooks(), oldBooksExpectedResult);

// console.log(oldBooks());

const authorWith3DotsOnNameExpectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return books
    .filter((book) => book.author.name.match(/([A-z]{1}\.)/g))
    .find((book) => book.author.name.match(/([A-z]{1}\.)/g).length === 3).name;
}

assert.deepEqual(authorWith3DotsOnName(), authorWith3DotsOnNameExpectedResult);

// console.log(authorWith3DotsOnName());
