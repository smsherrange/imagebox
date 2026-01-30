var express = require('express');
var router = express.Router();

const user_controller = require('../controllers/userController')

// Display registration form on GET
router.get('/register', user_controller.user_create_get);

// POST request for registering new user
router.post('/register', user_controller.user_create_post);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
