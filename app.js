const express = require('express');

const hbs = require('hbs');

const app = express();

app.use(express.static(__dirname, +'/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);

app.get('/', (request, response) => {
  response.render('home', { navbar: true, title: 'home' });
});

app.get('/about', (request, response) => {
  response.render('about', { navbar: true, title: 'about' });
});

app.get('/works', (request, response) => {
  response.render('works', { navbar: true, title: 'works' });
});

app.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log('http://localhost:3000');
});
