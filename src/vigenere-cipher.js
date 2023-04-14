const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(condition = true) {
    this.condition = condition;
  }

  encrypt(string, key) {
if(string === undefined || key === undefined) {
  throw new Error('Incorrect arguments!');
}
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let notEncrypt = '1234567890!@#$(),./|*-&^%: ';
let alphabetArray = alphabet.split('');
let notEncryptArray = notEncrypt.split('');

let stringArray = string.toUpperCase().split('');
let keyArray = key.toUpperCase().split('');

let stringArrayToShifr = [];
let immutableElements = [];
stringArray.forEach(item => {
if(!notEncryptArray.includes(item)) {
stringArrayToShifr.push(item);
} else {
immutableElements.push(item);
}
})

let indexStringShifr = stringArrayToShifr.map(item => alphabetArray.indexOf(item));
let indexKeyShifr = keyArray.map(item => alphabetArray.indexOf(item));

//console.log(immutableElements);
//console.log(indexKeyShifr);
//console.log(indexStringShifr);

let newKey = [];
while(newKey.length < indexStringShifr.length)
{
newKey.push(...indexKeyShifr)
}
newKey = newKey.slice(0, indexStringShifr.length);

//console.log(newKey);
let arraySum = [];
for (let i=0; i < newKey.length; i++) {
arraySum.push(newKey[i]+indexStringShifr[i]);
}
//console.log(arraySum);
arraySum = arraySum.map(item => {
if(item >= 26) {
return item%26
} else return item
})
console.log(arraySum);
let result = [];
arraySum.forEach(item => {
result.push(alphabetArray[item]);
}
)
console.log(result);
  let allResalt = []
stringArray.forEach(item => {
  if(notEncryptArray.includes(item)) {
    allResalt.push(item)
  } else {
    let needSimbol = result.shift();
    allResalt.push(needSimbol)
  }
})
 console.log(allResalt);
 if(this.condition === false) {
  return allResalt.reverse().join('');
 }
return allResalt.join('');
  }


  
  decrypt(string, key) {
if(string === undefined || key === undefined) {
  throw new Error('Incorrect arguments!');
}
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let notEncrypt = '1234567890!@#$(),./|*-&^%: ';
let alphabetArray = alphabet.split('');
let notEncryptArray = notEncrypt.split('');

let stringArray = string.toUpperCase().split('');
let keyArray = key.toUpperCase().split('');

let stringArrayToShifr = [];
stringArray.forEach(item => {
if(!notEncryptArray.includes(item)) {
stringArrayToShifr.push(item);
} 
})

  console.log(stringArrayToShifr)

let indexStringShifr = stringArrayToShifr.map(item => alphabetArray.indexOf(item));
let indexKeyShifr = keyArray.map(item => alphabetArray.indexOf(item));

//console.log(immutableElements);
//console.log(indexKeyShifr);
//console.log(indexStringShifr);

let newKey = [];
while(newKey.length < indexStringShifr.length)
{
newKey.push(...indexKeyShifr)
}
newKey = newKey.slice(0, indexStringShifr.length);

//console.log(newKey);
let arrayDifference = [];
for (let i=0; i < newKey.length; i++) {
arrayDifference.push(indexStringShifr[i] - newKey[i]);
}
console.log(arrayDifference);
arrayDifference = arrayDifference.map(item => {
if(item < 0) {
return item + 26;
} else return item
})
console.log(arrayDifference);
let result = [];
arrayDifference.forEach(item => {
result.push(alphabetArray[item]);
}
)
console.log(result);
  let allResalt = []
stringArray.forEach(item => {
  if(notEncryptArray.includes(item)) {
    allResalt.push(item)
  } else {
    let needSimbol = result.shift();
    allResalt.push(needSimbol)
  }
})
 console.log(allResalt);
 if(this.condition === false) {
  return allResalt.reverse().join('');
 }
return allResalt.join('');

  }
}

module.exports = {
  VigenereCipheringMachine
};
