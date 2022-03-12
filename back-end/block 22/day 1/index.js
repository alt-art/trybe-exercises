const read = require('readline-sync');
const fs = require('fs');


console.log('Qual desses scripts você deseja executar?');

const scripts = [];

const files = fs.readdirSync('./');

files.forEach((file) => {
  if (file.endsWith('.js') && file !== 'index.js') {
      scripts.push(file);
    }
});

scripts.forEach((script, index) => {
  console.log(`${index}: ${script}`);
});

const number = read.prompt();
console.log(`Você escolheu o script ${scripts[number]}`);

require(`./${scripts[number]}`);
