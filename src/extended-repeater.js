const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let mainStr = addStr = '';
  let oRep = {
    repeatTimes: options.repeatTimes || 1,
    separator: options.separator || '+',
    addition: options.hasOwnProperty('addition') ? String(options.addition) : '',
    additionRepeatTimes: options.additionRepeatTimes || 1,
    additionSeparator: (options.additionRepeatTimes && !options.additionSeparator) ? '|' : options.additionSeparator || ''
  }
  addStr = `${oRep.addition}${oRep.additionSeparator}`.repeat(oRep.additionRepeatTimes);
  addStr = trimSeparator(addStr, oRep.additionSeparator);


  mainStr = `${str}${addStr}${oRep.separator}`.repeat(oRep.repeatTimes);

  mainStr = trimSeparator(mainStr, oRep.separator);

  return mainStr;
}

let trimSeparator = (str, separator) => {
  let separ = separator.replace(/([\[\]\\\^\$\.\|\?\*\+\(\)])/g, '\\$1');
  let reg = new RegExp(`(.+)${separ}$`);
  return str.replace(reg, '$1');
}

module.exports = {
  repeater
};
