// backend/server.js
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
}); 

const express = require('express');
const app = express(Signup,Login,Home);
const path = require('path');
const bodyParser = require('body-parser');
const { renderToString } = require('react-dom/server');
const collection = require('./mongo');
const { default: Signup } = require('../src/pages/Signup');
const { default: Login } = require('../src/pages/Login');
const { default: Home } = require('../src/pages/Home');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'build')));


// app.get('/', (req, res) => {
//   const content = renderToString(<Login />);
//   res.render('index', { content });
// });


app.get('/signup', (req, res) => {
  const content = renderToString('Signup');
  res.render('index', { content });
});

// app.get('/home', (req, res) => {
//   const content = renderToString(<Home />);
//   res.render('index', { content });
// });

app.post('/signup', async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };
  await collection.insertMany([data]);
  res.redirect('/home');
});

// app.post('/login', async (req, res) => {
//   try {
//     const check = await collection.findOne({ name: req.body.name });

//     if (check.password === req.body.password) {
//       res.redirect('/home');
//     } else {
//       res.render('error', { error: 'Incorrect password' });
//     }
//   } catch {
//     res.render('error', { error: 'Wrong details' });
//   }
// });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
