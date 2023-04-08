const convertToCelsius = function(fH) {
  let result = ((fH - 32) * 5)/9;
  let roundedres = Math.round(result * 10)/10;
  return roundedres;
  

};

const convertToFahrenheit = function(cL) {
  let result = ((cL * 9)/5)+32;
  let roundedres = Math.round(result * 10)/10;
  return roundedres;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
