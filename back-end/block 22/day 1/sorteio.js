const read = require('readline-sync');

const aswer = read.questionInt('Qual é o numero a ser sorteado? ');

const randomNumber = Math.floor(Math.random() * 10);

if (aswer === randomNumber) {
  console.log('Parabéns, numero correto!');
} else {
  console.log(`Opa não foi dessa vez, o numero sorteado foi ${randomNumber}`);
}

const playAgain = read.question('Deseja jogar novamente? (y/n) ');

if (
  playAgain.toLowerCase() === 's' ||
  playAgain.toLowerCase() === 'sim' ||
  playAgain.toLowerCase() === 'y' ||
  playAgain.toLowerCase() === 'yes'
) {
  playGame();
}
