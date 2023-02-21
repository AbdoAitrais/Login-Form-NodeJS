const express = require("express");
const bodyParser = require('body-parser');
const port = 3000;
const host = '0.0.0.0';
const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/form/index.html');
});

app.post('/login', function(req, res) {
  if ((req.body.login === 'abdo@hello.com') && (req.body.password === 'rais')) {
    res.redirect('/home');
  }else{
    res.redirect('/incorrect');
  }
});

app.get('/home', function(req, res) {
  res.sendFile(__dirname + '/form/home.html');
});

app.get('/incorrect', function(req, res){
  res.sendFile(__dirname + '/form/incorrect.html');
});

app.get('/logout', function(req, res) {
  res.redirect('/');
});

app.get('/incorrectBack', function(req, res) {
  res.redirect('/');
});

app.listen(port,host, function () {
  console.log(`Example app listening on port ${port}!`);
});