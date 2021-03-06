'use strict';

// REMOVES DUPLICATE ROWS

module.exports = (data) => {
  return new Promise((resolve, reject) => {
    const headings = data[0];
    data = data.slice(1, data.length);

    let occurences = {};
    let arr = [];

    for (let i = 0; i < data.length; i++) {
      let prop = JSON.stringify(data[i]);
      occurences[prop] = occurences[prop] ? occurences[prop] + 1 : 1;
      if (occurences[prop] <= 1) arr.push(data[i]);
    }

    resolve([ headings ].concat(arr));
  });
};
