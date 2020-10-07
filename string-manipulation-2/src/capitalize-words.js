/* eslint-disable no-unused-vars */
const capitalizedWords = string => {
  const result = [];
  const wordsLower = string.toLowerCase();
  const toSplit = wordsLower.split(' ');
  for (let i = 0; i < toSplit.length; i++) {
    result.push(toSplit[i][0].toUpperCase() + toSplit.slice(1));
  }
  return result.join(' ');
};
