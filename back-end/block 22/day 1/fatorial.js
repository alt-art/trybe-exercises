const read = require('readline-sync');

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

const number = read.questionInt('Digite um número: ');

if (number < 0) {
  console.log('Número inválido');
}

console.log(`Fatorial de ${number} é ${factorial(number)}`);
