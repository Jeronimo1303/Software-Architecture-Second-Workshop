const express = require('express');
const getRandomPokenea = require('./src/utils.js');
const path = require('path');
const app = express();
const port = 80;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, './public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('layout', { title: 'Pokenea Viewer' });
});

app.get('/random', (req, res) => {
  res.render('random', { title: 'Random Pokenea', pokenea : getRandomPokenea() });
});

app.get('/image', (req, res) => {
  res.render('image', { title: 'Pokenea Image', pokenea : getRandomPokenea() });
});

app.listen(port, () => console.log(`Server running on port ${port}`));