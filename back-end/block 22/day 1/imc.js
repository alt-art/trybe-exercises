const read = require('readline-sync');

const height = read.questionFloat('Altura (metro): ');
const weight = read.questionFloat('Peso (kilo): ');

const imc = weight / Math.pow(height, 2);

console.log(`IMC: ${imc.toFixed(2)}`);

if (imc < 18.5) {
  console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
  console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
  console.log('Sobrepeso');
} else if (imc >= 30 && imc < 35) {
  console.log('Obesidade grau I');
} else if (imc >= 35 && imc < 40) {
  console.log('Obesidade grau II');
} else {
  console.log('Obesidade grau III e IV');
}
