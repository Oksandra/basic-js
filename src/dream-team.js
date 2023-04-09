const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(Array.isArray(members) === false) {
    return false;
  }
  let trueValue = [];
  members.forEach(item => {
    if(typeof item === 'string') {
      trueValue.push(item);
    }
  })
  let firstLetters = trueValue
    .map(item => item.trim())
    .map(item => item[0].toUpperCase());
    console.log(firstLetters);
    const sorted = firstLetters.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  })
     return sorted.join('');
  }


module.exports = {
  createDreamTeam
};
