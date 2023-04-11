const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let ind = []
   arr.forEach(function(item, index) {
     if(item === -1) {
       ind.push(index);
     }
   })
   //console.log(ind)
   let sortArray = arr.filter(item => item !==-1);
   sortArray.sort( (a, b) => a - b );
  // console.log(sortArray)
   ind.forEach(item => {
     sortArray.splice(item, 0, -1);
   })
   //console.log(sortArray)
 return sortArray;
 }

module.exports = {
  sortByHeight
};
