const reverseString = function(str) {
let splitted = str.split('');
let reversed = splitted.reverse();
let joined = reversed.join('');
return joined;
};

// Do not edit below this line
module.exports = reverseString;
