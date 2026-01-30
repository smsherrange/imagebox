var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res) {
  res.render('register', { title: 'Account Registration '});
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'User Login' });
});

module.exports = router;
