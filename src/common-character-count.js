const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 
  let arr2
  if(s1.length >= s2.length) {
   arr1 = s1.split('');
   arr2 = s2.split('');
  } else {
  arr1 = s2.split('');
  arr2 = s1.split('');
  }

  let count = 0;
  
  arr1.forEach(item => {
    if(arr2.includes(item)) {
     count++;
      arr2.splice(arr2.indexOf(item), 1)
    }
  })
  return count
}

module.exports = {
  getCommonCharacterCount
};
