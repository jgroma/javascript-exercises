const ftoc = function(temp) {
   const Conversion = (temp - 32) * 5/9;
   const roundedConversion = Math.round(Conversion * 10) / 10;
   return roundedConversion;
};

const ctof = function(temp) {
  const Conversion = (temp * 9/5) + 32;
  const roundedConversion = Math.round(Conversion * 10) / 10;
  return roundedConversion;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
