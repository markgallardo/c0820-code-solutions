const express = require('express');
const path = require('path');
const app = express();

const filePath = path.join(__dirname, 'public');
const staticFile = express.static(filePath);

app.use(staticFile);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
