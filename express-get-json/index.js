const express = require('express');

const grade = [
  {
    id: 1,
    name: 'Cloud strife',
    course: 'swords fighting',
    grade: 90
  },
  {
    id: 2,
    name: 'Vincent Valentine',
    course: 'Sleeping',
    grade: 100
  }
];

const app = express();
app.get('/api/grades', (req, res) => {
  res.json(grade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000!');
});
