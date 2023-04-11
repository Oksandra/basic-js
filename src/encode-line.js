const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
   let count = 1;

 for(let i = 0; i < str.length; i++) { 
   let currElement = str[i];
   if(currElement === str[i+1]) {
     count ++
   } else {
     if(count !== 1) {
       result += `${count}${currElement}`;
       count = 1;
     } else {
       result += `${currElement}`;
     }
   }
   console.log(result)
 }
return result;
}

module.exports = {
  encodeLine
};
