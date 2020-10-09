const fs = require('fs');
const input = process.argv[2];
fs.writeFile('note.txt', input, 'utf8', (err, data) => {
  if (err) throw err;
});
