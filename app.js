const express = require('express');
const app = express();

// Use variables environment (/.env)
const dotenv = require('dotenv').config();

// Set PUG like templating motor
app.set('view engine', 'pug');
//Use Script & CSS
app.use(express.static('assets'));

app.get('/', function(req, res) {
  res.render('index', { pageTitle: 'Training Works Home' });
});

app.listen(process.env.PORT, () =>
  console.log(`Front app listening on port ${process.env.PORT}!`)
);
