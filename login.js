var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');



// Use body-parser middleware to parse request bodies
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req, res) {
  res.sendFile(__dirname + '/form/index.html');
});

router.post('/login', function(req, res) {
  if ((req.body.login === 'abdo@hello.com') && (req.body.password === 'rais')) {
    res.redirect('/home');
  }else{
    res.redirect('/incorrect');
  }
});

router.get('/home', function(req, res) {
  res.sendFile(__dirname + '/form/home.html');
});

router.get('/incorrect', function(req, res){
  res.sendFile(__dirname + '/form/incorrect.html');
});

router.get('/logout', function(req, res) {
  res.redirect('/');
});

router.get('/incorrectBack', function(req, res) {
  res.redirect('/');
});

//export this router to use in our index.js
module.exports = router;