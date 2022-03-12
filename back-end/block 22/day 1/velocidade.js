const read = require('readline-sync');

const distance = read.questionFloat('Distância (metro): ');
const time = read.questionFloat('Tempo (segundo): ');

const speed = distance / time;

console.log(`Velocidade: ${speed}`);
