'use strict';

// DEPENDENCIES

const { promisify } = require('util');
const readFile = promisify(require('fs').readFile);
const parse = promisify(require('csv').parse);

// EXPORTS READING FUNCTIONALITY
module.exports = input => {
  return new Promise((resolve, reject) => {
    readFile(input)
    .then(parse)
    .then(resolve)
    .catch(reject);
  });
};
