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
  if(date) {
if(isNaN(Date.parse(date)) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error ('Invalid date!');
  }
    let month = date.getMonth();
    if(month >= 2 && month < 5) {
      return 'spring';
    } else if(month >= 5 && month < 8) {
      return 'summer';
    } else if(month >= 8 && month < 11) {
      return 'autumn';
    } else if(month >= 11 && month < 13 || month === 1 || month === 0) {
      return 'winter'
    }   
  } else return 'Unable to determine the time of year!';
}


module.exports = {
  getSeason
};
