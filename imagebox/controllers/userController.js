const User = require('../models/user')
const { body, validationResult } = require('express-validator');

// Show sign up page on GET
exports.user_create_get = async (req, res, next) => {
    res.render('register', {title: 'Account Registration'});
};

// Create new user on POST
exports.user_create_post = [

    // Validate and sanitize fields.
    body('username')
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage('Please enter a username.'),
    body('email')
        .trim()
        .isLength( { min: 1})
        .escape()
        .withMessage('Please enter a valid email address.'),
    body('password')
        .isLength( { min: 10 })
        .withMessage('Please enter a password with a minimum length of 10 characters.'),
    body('confirm-password')
        .isLength( { min: 10 })
        .withMessage('Please enter a password with a minimum length of 10 characters that matches the above.'),

    // Process request after validation and sanitation.
    async (req, res, next) => {
        // Extract validation errors from request.
        const errors = validationResult(req);

        // Create new User with escaped and trimmed data.
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        // Rerender form if there are errors.
        if (!errors.isEmpty()) {
            res.render('register', {
                title: 'Account Registration',
                user,
                errors: errors.array(),
            });
        }

        // Otherwise, data in form is valid, user is saved in database.
        // Redirect to main app.
        await user.save();
        res.redirect('/');
    }
];