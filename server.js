const express = require('express');
const fs = require('fs');
let users = require('./db.json');

const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set('Access-Control-Allow-Headers', 'Content-type');
  next();
});

app.get('/api/users', (req, res) => {
  const lastUsers = [...users].splice(-7);

  if (users.length > 7) {
    res.json(lastUsers);
  } else {
    res.json(users);
  }
});

app.get('/api/all', (req, res) => {
  res.json(users);
});

app.post('/api/users', express.json(), (req, res) => {
  const newUser = {
    ...req.body,
    id: Math.random(),
  };

  users = [...users, newUser];

  fs.writeFile('db.json', JSON.stringify(users), (err) => {
    if (err) {
      throw err;
    }
  });

  res.json(newUser);
});

app.use(express.static('build'));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`express port: ${port}`);
});
