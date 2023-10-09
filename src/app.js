const path = require('path')
const express = require('express');
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('index', {
        title: "Home",
        name: "Kathy"
    });
})

app.get('/about', function (req, res) {
    res.render('about');
  })

  app.get('/projects', function (req, res) {
    res.render('projects');
  })

  app.get('/services', function (req, res) {
    res.render('services');
  })

  app.get('/contactme', function (req, res) {
    res.render('contactMe');
  })

app.listen(3000, () => {
    console.log("The server is running on port 3000");
})