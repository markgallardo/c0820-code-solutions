const express = require('express');
const app = express();

const grades = [
  {
    id: 1,
    name: 'Cloud Strife',
    course: 'swords',
    grade: 89
  },
  {
    id: 2,
    name: 'Vincent Valentine',
    course: 'sleeping',
    grade: 100
  },
  {
    id: 3,
    name: 'Tifa lockhart',
    course: 'Punching',
    grade: 80
  }
];

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.use(express.json());

app.delete('/api/grades/:id', (req, res) => {
  const gradesId = parseInt(req.params.id);
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].id === gradesId) {
      grades.splice(i, 1);
    }
  }
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000...');
});
