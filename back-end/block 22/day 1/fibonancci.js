const read = require('readline-sync');

const number = read.questionInt('Digite um número: ');

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 1; i <= number + 1; i++) {
  console.log(fibonacci(i));
}
