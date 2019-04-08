const fs = require('fs');
const eggsGenerator = require('./egg');
const characterGenerator = require('./character');

const eggs = [];

for (let i = 0; i < 100; i++) {
    const egg = eggsGenerator();
    eggs.push(egg);
}

const characters = characterGenerator();

fs.writeFileSync("./fake/characters.json", JSON.stringify(characters));
fs.writeFileSync("./fake/eggs.json", JSON.stringify(eggs));