const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  if (!domains.length) return {};
  if (!domains || !domains.length || !Array.isArray(domains)) return false;

  let obj = {};

  domains.sort((a1, a2) => a1.length - a2.length);

  let domainsReversed = domains.map(el => el.split('.').reverse().join('.'));
  let domName = domainsReversed[0].split('.')[0];
  obj[`.${domainsReversed[0]}`] = obj[`.${domName}`] = domainsReversed.length;
  for (let i = 1; i < domainsReversed.length; i++) {
    obj[`.${domainsReversed[i]}`] = 1;
  }
  return obj;
}

module.exports = {
  getDNSStats
};
