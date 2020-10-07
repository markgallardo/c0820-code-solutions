/* eslint-disable no-unused-vars */
const ransomCase = string => {
  let randomCase = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      randomCase += string[i].toLowerCase();
    } else {
      randomCase += string[i].toUpperCase();
    }
  }
  return randomCase;
};
