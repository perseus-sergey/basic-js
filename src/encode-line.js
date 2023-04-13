const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  counter = 1;
  coder = '';
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) counter++;
    else {
      counter = counter > 1 ? counter : '';
      coder += counter + str[i];
      counter = 1;
    }
  }
  return coder;
}

module.exports = {
  encodeLine
};
