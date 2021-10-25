const assert = require("assert");

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
      birthYear: 1921,
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

function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}

assert.equal(authorBornIn1947(), 'Stephen King');

// console.log(authorBornIn1947());

function smallerName() {
  return books.reduce((accum, book) =>
    book.name.length < accum.name.length ? book : accum
  ).name;
}

assert.equal(smallerName(), 'Duna');

// console.log(smallerName());

const getNamedBookExpectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}

assert.deepEqual(getNamedBook(), getNamedBookExpectedResult);

// console.log(getNamedBook());

const booksOrderedByReleaseYearDescExpectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1921 },
    releaseYear: 1965,
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
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}

assert.deepEqual(booksOrderedByReleaseYearDesc(), booksOrderedByReleaseYearDescExpectedResult);

// console.log(booksOrderedByReleaseYearDesc());

function everyoneWasBornOnSecXX() {
  return books.every(
    (book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000
  );
}

assert.equal(everyoneWasBornOnSecXX(), false);

// console.log(everyoneWasBornOnSecXX());

function someBookWasReleaseOnThe80s() {
  return books.some(
    (book) => book.releaseYear >= 1980 && book.releaseYear <= 1989
  );
}

assert.equal(someBookWasReleaseOnThe80s(), true);

// console.log(someBookWasReleaseOnThe80s());

function authorUnique() {
  const births = books.map((book) => book.author.birthYear);
  return Array.from(new Set(births)).length !== births.length;
}

assert.equal(authorUnique(), false);

// console.log(authorUnique());
