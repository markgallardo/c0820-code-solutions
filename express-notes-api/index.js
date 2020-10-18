const express = require('express');
const app = express();
const dataJson = require('./data.json');
const notes = Object.values(dataJson.notes);
const fs = require('fs');

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  // eslint-disable-next-line no-console
  console.log(notes);
  const getId = notes.findIndex(n => n.id === noteId);
  // eslint-disable-next-line no-console
  console.log(getId);
  // eslint-disable-next-line eqeqeq
  if (getId != noteId) {
    res.status(200).json(notes[getId]);
  } else if (noteId < 0 || !Number.isInteger(noteId)) {
    res.status(400).json('{"error": "id must be a positive integer"}');
  } else if (typeof dataJson.notes[noteId] === 'undefined') {
    res.status(404).json(`{"error": "cannot find note with id ${noteId}"}`);
  }
});
//   if (noteId < 1 || !noteId || Number.isInteger(noteId)) {
//     res.status(400).json({ error: 'input must be positive number' });
//     return;
//   }
//   for (let i = 0; i < notes.length; i++) {
//     // eslint-disable-next-line eqeqeq
//     if (noteId == notes[i].id) {
//       res.status(200).json(notes[i]);
//       return;
//     }
//   }
//   res.status(404).json({ error: 'not found' });
// });

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    return res.status(400).json({ error: 'content is a required field' });
  }
  req.body.id = dataJson.nextId;
  dataJson.notes[dataJson.nextId] = req.body;
  dataJson.notes[dataJson.nextId].id = dataJson.nextId;
  dataJson.nextId++;

  const dataStr = JSON.stringify(dataJson, null, 2);
  fs.writeFile('data.json', dataStr, 'utf8', err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    }
    res.status(201).json(req.body);
  });
});

app.delete('/api/notes/:id', (req, res, next) => {
  const noteId = parseInt(req.params.id, 10);
  if (!Number.isInteger(noteId) || noteId <= 0) {
    return res.status(400).json({
      error: 'id must be positive integer'
    });
  } else if (dataJson.notes[noteId] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${noteId} ` });
  }

});

app.put('/api/notes/:id', (req, res, next) => {
  const noteId = parseInt(req.params.id, 10);

  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }

  if (noteId <= 0 || !Number.isInteger(noteId)) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }
  if (dataJson.notes[noteId] === undefined) {
    res.status(404).json({ error: `can't find note with id ${noteId}` });
    return;
  }

  dataJson.notes[noteId].content = req.body.content;

  const dataStr = JSON.stringify(dataJson, null, 2);
  fs.writeFile('data.json', dataStr, err => {
    if (err) {
      console.error(err);
      res.staus(500).json({ error: 'An unexpected error occured' });
    }
    res.staus(200).json(req.body);
  });

});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000...');
});
