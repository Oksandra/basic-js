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
  let arr = String(n).split('');
  let res = [];
  for(let i = 0; i <= arr.length; i++) {
    arr = String(n).split('');
    arr.splice(i, 1); 
    res.push(arr);
  }
let allRes = res.map(item => +item.join(''));
 return Math.max(...allRes)
}

module.exports = {
  deleteDigit
};
