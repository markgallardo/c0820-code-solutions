const express = require('express');
const app = express();

const grades = [];
let nextId = 1;

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  res.json(req.body);
  grades.push(req.body);
  res.status(201);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
