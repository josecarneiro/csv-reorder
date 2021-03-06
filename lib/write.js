'use strict';

// DEPENDENCIES

const { parse } = require('path');
const { promisify } = require('util');
const mkdirp = promisify(require('mkdirp'));
const writeFile = promisify(require('fs').writeFile);
const stringify = promisify(require('csv').stringify);

// EXPORTS WRITING FUNCTIONALITY

module.exports = (data, output) => {
  return new Promise((resolve, reject) => {
    mkdirp(parse(output).dir)
    .then(() => stringify(data))
    .then(string => writeFile(output, string, 'utf8'))
    .then(() => resolve(data))
    .catch(reject);
  });
};
