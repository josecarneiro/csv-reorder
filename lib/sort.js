'use strict';

const format = (value, type) => {
  if (type === 'date' && new Date(value).getTime()) {
    return new Date(value);
  } else if (type === 'number' && typeof parseFloat(value) === 'number' && !isNaN(parseFloat(value))) {
    return parseFloat(value);
  } else if (type === 'boolean' && (value === 'true' || value === 'false')) {
    return value ? 1 : 0;
  } else {
    return value;
  }
};

// EXPORTS ROW SORTING FUNCTIONALITY

module.exports = (data, options) => {
  return new Promise((resolve, reject) => {
    const headings = data[0];
    data = data.slice(1, data.length);

    const index = headings.indexOf(options.sort);
    if (index < 0) return reject(new Error('Column not found.'));
    const sort = options.descending ? -1 : 1;
    const type = options.type;

    data.sort((a, b) => {
      if (format(a[index], type) < format(b[index], type)) return -1 * sort;
      if (format(a[index], type) > format(b[index], type)) return 1 * sort;
      return 0;
    });

    resolve([ headings ].concat(data));
  });
};
