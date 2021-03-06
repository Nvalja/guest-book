const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 5000;


app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set('Access-Control-Allow-Headers', 'Content-type');
  next();
})

let users = require('./db.json');

app.get('/api/users', (req, res) => {
  res.json(users)
});

app.post('/api/users', express.json(), (req, res) => {
  
  console.log(req.body);

  const newUser = {
    ...req.body,
    id: Math.random(),
  };

  users = [...users, newUser]

  fs.writeFile('db.json', JSON.stringify(users), (err) => {
    if (err) console.log('Error');
  });

  res.json(newUser)
});

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`express port: ${port}`);
});