/* eslint-disable no-unused-vars */
const capitalizeWord = word => {
  let capWord = '';
  if (word.toLowerCase() === 'javascript') {
    capWord = 'JavaScript';
  } else {
    capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  return capWord;
};
