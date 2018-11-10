#!/usr/bin/env node

const fs = require('fs');

var file = fs.readFileSync("./prompts.txt", 'utf8');

console.log(file);
console.log('Hello, world!');