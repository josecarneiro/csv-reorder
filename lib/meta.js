'use strict';

// GATHERS METADATA FROM DATA
// BEFORE AND AFTER MANIPULATION

module.exports = (original, manipulated) => {
  return new Promise((resolve, reject) => {
    let meta = {};
    let data = original.slice(1, original.length);
    // ORIGINAL ROW COUNT
    meta.rows = data.length;
    // ORIGINAL REPEATED COUNT
    meta.repeated = 0;
    let occurrences = {};
    for (let item of data) {
      let prop = JSON.stringify(item);
      occurrences[prop] = occurrences[prop] ? occurrences[prop] + 1 : 1;
    }
    for (let occurrence in occurrences) {
      if (occurrences[occurrence] > 1) meta.repeated++;
    }
    // REMOVED COUNT (should be the same as original repeated count)
    meta.removed = original.length - manipulated.length;
    resolve(meta);
  });
};
