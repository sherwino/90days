const express = require('express');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

//root of the domain or the homepage is the first thing / that's what that slash is for
// our domain at the moment is http://localhost:3000/
app.get('/', (request, response, next) => {
  console.log('HOME PAGE (root of domain)');

  response.render('home.ejs');

  // this opens views/home.ejs
});

app.get('/about', (req, res, next) => {
  res.render('about.ejs');
});

app.get('/media', (req, res, next) => {
  res.render('media.ejs');
});


//to visit our app you have to now go to port 3000
app.listen(3000);
