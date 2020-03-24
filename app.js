const express = require('express');
const app = express();
// Use variables environment (/.env)
const dotenv = require('dotenv').config();
// Setup express()
app.set('view engine', 'pug');
//Use Script & CSS
app.use(express.static('assets'));
//Port rendering
app.listen(process.env.PORT, () =>
  console.log(`Front app listening on port ${process.env.PORT}!`)
);

app.get('/', function(req, res) {
  res.render('index', { pageTitle: 'Training Works' });
});

/* Libraries */
// Particles.js
app.get('/libraries-0', function(req, res) {
  res.render('libraries-0', { pageTitle: 'Particles.js' });
});
// Countup.js
app.get('/libraries-1', function(req, res) {
  res.render('libraries-1', { pageTitle: 'Countup.js' });
});

/* Codepens */
/* Apis */
// Intersection-observer
app.get('/apis-0', function(req, res) {
  res.render('apis-0', { pageTitle: 'Intersection-observer' });
});
/* Others */
