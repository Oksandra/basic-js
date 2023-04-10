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
  if(Array.isArray(arr) === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");}
   
   let transform = arr.slice();
   for (let i = 0; i < transform.length; i++) {
     if (transform[i] === '--discard-next' && i !== 0) {
       transform.splice(i, 2)
       break;
     }
     if (transform[i] === '--discard-prev' && i !== 0) {
       transform.splice(i-1, 2)
       break;
     }
     if (transform[i] === '--double-next' && transform[transform.length-1] !== '--double-next') {
       transform[i] = arr[i+1]
     }
     if (transform[i] === '--double-prev' && transform[0] !== '--double-prev') {
       transform[i] = arr[i-1]
     }
   }
   return transform.filter(arr => arr !== '--discard-prev' && arr !== '--double-next' && arr !== '--double-prev' && arr !== '--discard-next');
 }



module.exports = {
  transform
};
