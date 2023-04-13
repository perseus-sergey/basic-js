const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let ar = [...'' + n];
  let max = 0;

  ar.forEach((item, ind) => {
    let newAr = ar.slice();
    newAr.splice(ind, 1);
    max = Math.max(max, newAr.join(''));
  })
  return max;
}

module.exports = {
  deleteDigit
};
