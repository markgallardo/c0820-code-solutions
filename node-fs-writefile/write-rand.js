const fs = require('fs');
const randomNum = Math.random();

fs.writeFile('Random.txt', randomNum, err => {
  if (err) throw err;
});
