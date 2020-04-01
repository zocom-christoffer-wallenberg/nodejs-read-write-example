const { sayHello } = require('./greeting.js');
const fs = require('fs');
const file = fs.createWriteStream('quote.txt');

sayHello();

fs.readFile('index.html', 'utf8', (error, contents) => {
    console.log('Innehållet i index.html är: ', contents);
});

let quote = 'Be yourself. Everyone else is already taken.';

fs.writeFile('OscarWilde.txt', quote, (error) => {
    console.log('Quote saved');
});

for(let i = 0; i < 5; i++) {
    file.write('One can never be to overeducated or overdressed.');
}

file.end();

const read = fs.createReadStream('alice.txt');
const write = fs.createWriteStream('alice2.txt');

read.pipe(write);