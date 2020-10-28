/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const promise1 = takeAChance('Mark').then(message => {
  console.log(message);
}).catch(message => {
  console.error(message);
});
