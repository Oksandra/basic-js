const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if(names.length === 0) {
    return [];
  }
    let res = [];
    let value = {};
     for(let i = 0; i < names.length; i++) {
       let element = names[i];
       if(!value[element]) { 
         if(!res.includes(element)) {
           res.push(element);
           value[element] = 0;
         } else {
           value[element] = 1;
           res.push(`${element}(${ value[element]})`);
         }
       } 
       else {
      value[element] += 1;
      res.push(`${element}(${value[element]})`);
    }
     }
    return res;
  }

module.exports = {
  renameFiles
};
