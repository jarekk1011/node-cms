'use strict'
const PostController = require('../controllers/PostController.js');
const express = require('express');
const MessageModel = require('../models/message');
// Router
const controllers = {};

const passport = require('passport');


controllers.user = require('../controllers/UserController.js');


// PostController = new PostController();
// console.log(PostController);

const API_AUTHENTICATION = controllers.user.authenticate;

module.exports = (function() {
    let auth = express.Router();

    // =====================================
    // GOOGLE ROUTES =======================
    // =====================================
    // send to google to do the authentication
    // profile gets us their basic information including their name
    // email gets their emails
    auth.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    // the callback after google has authenticated the user
    auth.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/admin/dashboard',
            failureRedirect: '/'
        }));

    return auth;
})();