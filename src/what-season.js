const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  try {
    let dum = date.getUTCMonth()
  } catch (error) {
    if (error.name == 'TypeError') throw new Error("Invalid date!");
  }

  let month = date.getMonth();
  let season;

  switch (true) {
    case month == 11 || month == 0 || month == 1:
      season = 'winter'
      break;
    case month == 2 || month == 3 || month == 4:
      season = 'spring'
      break;
    case month == 5 || month == 6 || month == 7:
      season = 'summer'
      break;
    case month == 8 || month == 9 || month == 10:
      season = 'autumn'
      break;
  }
  return season;
}

module.exports = {
  getSeason
};
