const palindromes = function (string) {
 let  regx = /[\W_]/g;
 let regxstr = string.toLowerCase().replace(regx,'');
 let reversedstr = regxstr.split('').reverse().join('');
 return regxstr === reversedstr;

};

// Do not edit below this line
module.exports = palindromes;
