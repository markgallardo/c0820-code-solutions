const express = require('express');
const app = express();

app.use((req, res, next) => {
  if (req.originalUrl) {
    res.sendFile(req.path, { root: __dirname });
  } else {
    res.sendStatus(404);
    next();
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
