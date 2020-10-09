/* eslint-disable no-console */
const fs = require('fs');
const textFile = process.argv[2];

fs.readFile(textFile, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
