#!/usr/bin/env node


const express = require('express')
const app = express()
const port = 3000

const fs = require('fs');

var file = fs.readFileSync("./prompts.txt", 'utf8');

console.log(file);


console.log('Hello, world!');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})