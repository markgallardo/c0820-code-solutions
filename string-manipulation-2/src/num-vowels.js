/* eslint-disable no-unused-vars */
const numVowels = string => {
  let vowelCt = 0;
  const upperStr = string.toUpperCase();
  for (let i = 0; i < upperStr.length; i++) {
    if (upperStr[i] === 'A' || upperStr[i] === 'E' || upperStr[i] === 'I' || upperStr[i] === 'O' || upperStr[i] === 'U') {
      vowelCt += 1;
    }
  }
  return vowelCt;
};
