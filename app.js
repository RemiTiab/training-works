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

// Lottie animation
app.get('/libraries-2', function(req, res) {
  res.render('libraries-2', { pageTitle: 'Lottie animation' });
});

// ScrollMagic.js
app.get('/libraries-3', function(req, res) {
  res.render('libraries-3', { pageTitle: 'ScrollMagic.js' });
});

// Shave.js
app.get('/libraries-4', function(req, res) {
  res.render('libraries-4', { pageTitle: 'Shave.js' });
});

// Tarteaucitron.js
app.get('/libraries-5', function(req, res) {
  res.render('libraries-5', { pageTitle: 'Tarteaucitron.js' });
});

// Hamburgers.js
app.get('/libraries-6', function(req, res) {
  res.render('libraries-6', { pageTitle: 'Hamburgers.js' });
});

// Glide.js
app.get('/libraries-7', function(req, res) {
  res.render('libraries-7', { pageTitle: 'Glide.js' });
});

/* Codepens */
// Dynamic Timer
app.get('/codepens-0', function(req, res) {
  res.render('codepens-0', { pageTitle: 'Dynamic Timer' });
});
// Cross Color Text Reveal
app.get('/codepens-1', function(req, res) {
  res.render('codepens-1', { pageTitle: 'Cross Color Text Reveal' });
});
// Responsive Blog Card Slider
app.get('/codepens-2', function(req, res) {
  res.render('codepens-2', { pageTitle: 'Responsive Blog Card Slider' });
});
// Responsive News Card Slider
app.get('/codepens-3', function(req, res) {
  res.render('codepens-3', { pageTitle: 'Responsive News Card Slider' });
});

/* Apis */
// Intersection-observer
app.get('/apis-0', function(req, res) {
  res.render('apis-0', { pageTitle: 'Intersection-observer' });
});

/* Others */
// Some CSS Tricks
app.get('/others-0', function(req, res) {
  res.render('others-0', { pageTitle: 'Some CSS Tricks' });
});

// Header Background Scroll Effect
app.get('/others-1', function(req, res) {
  res.render('others-1', { pageTitle: 'Header Background Scroll Effect' });
});
