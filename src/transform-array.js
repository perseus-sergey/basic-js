const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let arrNew = arr.slice();
  arrNew.filter((val, ind, ar) => {
    if (val == '--discard-next') {
      if (ar[ind + 1] !== undefined) ar[ind + 1] = undefined;
      // console.log(ar);
      return false;
    }
    else if (val == '--discard-prev') {
      if (ar[ind - 1] !== undefined) ar[ind - 1] = undefined;
      return false;
    }
    else if (val == '--double-prev') {
      ar[ind] = ar[ind - 1];
      return true;
    }
    else if (val == '--double-next') {
      ar[ind] = ar[ind + 1];
      return true;
    }
    else if (val === undefined) {
      return false;
    }
    return true;
  })

  return arrNew.filter(el => el != '--discard-next' && el != '--discard-prev' && el != '--double-next' && el != '--double-prev' && el !== undefined);
}

module.exports = {
  transform
};
