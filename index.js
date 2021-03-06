'use strict';

// DEPENDENCIES
const read = require('./lib/read');
const write = require('./lib/write');
const sort = require('./lib/sort');
const removeDuplicates = require('./lib/remove-duplicates');
const meta = require('./lib/meta');

// EXPORTS MAIN FUNCTIONALITY
module.exports = options => {
  return new Promise((resolve, reject) => {
    let input, manipulated;
    read(options.input)
    .then(data => {
      input = data;
      return sort(input, options);
    })
    .then(data => {
      manipulated = data;
      return removeDuplicates(manipulated);
    })
    .then(data => {
      manipulated = data;
      return write(manipulated, options.output);
    })
    .then(() => meta(input, manipulated))
    .then(resolve)
    .catch(reject);
  });
};
