const user_controller = require('../controllers/userController')
let express = require('express');
let router = express.Router();

// Display registration form on GET
router.get('/create', user_controller.user_create_get);

// POST request for registering new user
router.post('/create', user_controller.user_create_post);

module.exports = router;
