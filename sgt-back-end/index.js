const pg = require('pg');
const express = require('express');
const jsonMiddleware = express.json();
const app = express();

app.use(jsonMiddleware);

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.get('/api/grades', (req, res) => {
  const select = `
         select *
          from "grades";
  `;
  db.query(select)
    .then(result => res.status(200).json(result.rows))
    .catch(err => {
      res.status(500).json({ error: 'An unexpected error occured.' });
      console.error(err);
    });
});

app.post('/api/grades', (req, res) => {
  let{ name, course, grade } = req.body;
  grade = parseInt(grade, 10);
  if (!name || !course || !grade) {
    res.status(400).json({ error: 'Name, Course and Grade field are required' });
  } else {
    const insert = `
    insert into "grades"("name", "course", "grade")
                values( $1, $2, $3)
            returning *;
    `;
    const params = [name, course, grade];
    db.query(insert, params)
      .then(result => res.status(201).json(result.rows))
      .catch(err => {
        res.status(500).json({ error: 'An unexpected error occured.' });
        console.error(err);
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const { name, course, grade } = req.body;
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!gradeId || gradeId <= 0) {
    res.status(400).json({ error: 'The grade id must be a positive integer' });
  }
  const update = `
  update"grades"
      set"name" = $1,
          "course" =$2,
          "grade" =$3
      where "gradeId" =$4
      returning *;
      `;
  const values = [name, course, grade, gradeId];
  db.query(update, values)
    .then(result => {
      if (result.rows[0] === undefined) {
        res.status(404).json({ error: 'The Grade row does not exist' });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(err => {
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
      console.error(err);
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: ' the Grade id must be a positive integer' });
    return;
  }
  const sql = `
  delete from "grades"
   where "gradeId" = $1
  returning *;
`;

  const values = [gradeId];
  db.query(sql, values)
    .then(result => {
      if (result.rows[0] === undefined) {
        res.status(404).json({ error: ' The grade row does not exist' });
      } else {
        res.status(204).json(result.row[0]);
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'An unexpected error occurred' });
      console.error(err);
    });
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
