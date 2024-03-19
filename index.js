const machi_learner_use = require('machi-learner-use');
const machi_learner_fullkit = require('machi-learner-fullkit');
const axios = require('axios');
const react = require('react');
const mongoose = require('mongoose');
const chalk = require('chalk');
const commander = require('commander');
const eslint = require('eslint');
const web3_react = require('web3-react');
const jest = require('jest');
const nodemon = require('nodemon');
const body_parser = require('body-parser');
const truffle = require('truffle');
const mocha = require('mocha');
const fs_extra = require('fs-extra');
const debug = require('debug');
const jquery = require('jquery');
const dotenv = require('dotenv');
const async = require('async');
const cors = require('cors');

const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('customEvent', (message) => {
  console.log(`Received: ${message}`);
});
emitter.emit('customEvent', 'Hello World with Event Emitter');

// Calculate Fibonacci sequence up to a certain number of terms
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }
  return sequence;
}
console.log('Fibonacci sequence (10 terms):', fibonacci(10));

const numbersWithDuplicates = [1, 2, 3, 4, 4, 5, 5, 6];
const uniqueNumbers = new Set(numbersWithDuplicates);
console.log(Array.from(uniqueNumbers));

const dns = require('dns');
dns.resolve('www.example.com', 'A', (err, addresses) => {
  if (err) throw err;
  console.log('IP addresses:', addresses);
});

const capitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(capitalizeString('hello'));

const net = require('net');
const server = net.createServer((socket) => {
  socket.end('Hello from TCP server!\n');
});
server.listen(1337, '127.0.0.1');