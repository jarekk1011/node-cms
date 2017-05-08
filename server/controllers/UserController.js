'use strict'
const User = require('../models/user');
const passport = require('passport');
var mongoose = require('mongoose');


exports.create = function(req, res, next) {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('password', 'Password must be at least 4 characters long').len(4);
    req.assert('password2', 'Passwords do not match').equals(req.body.password);
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    const errors = req.validationErrors();
    if (errors) {
        req.flash('errors', errors);
        return res.json(errors);
    }
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    // console.log()

    User.findOne({ email: req.body.email }, (err, existingUser) => {
        // console.log(req.body);
        if (err) { return next(err); }
        if (existingUser) {
            req.flash('errors', { msg: 'Account with that email address already exists.' });
            return res.json([{ success: false, msg: 'Account with that email address already exists.' }]);
        }
        user.save((err) => {
            // console.log('saving');
            if (err) {
                console.log(err);
                // return next(err);
            }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }
                // req.user = user;

                res.json([{ success: true, msg: 'Success! Please Login!' }]);
            });
        });
    });
};

exports.postLogin = function(req, res, next) {
    // console.log(req.session);
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('password', 'Password cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    const errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        return res.json({ success: false, msg: errors });
    }

    passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) {
            req.flash('errors', info);
            return res.json({ success: false, msg: 'Invalid password or email!' });
        }
        req.logIn(user, (err) => {
            if (err) { return next(err); }
            req.flash('success', { msg: 'Success! You are logged in.' });
            res.json({
                success: true,
                msg: 'Success! You are logged in.',
                user: user
            });
        });
    })(req, res, next);
}

exports.auth = function(req, res) {
    if (req.user) {
        res.status(200).json(req.user);
    } else {
        res.sendStatus(403);
    }
}
exports.authenticate = function(req, res, next) {
    if (!req.isAuthenticated()) {
        // res.status(403);
        return res.status(403).render('403');
    }
    next();
}

exports.postLogout = function(req, res) {
    req.logout();
    req.session.authenticated = false;
    res.json({ success: true, msg: 'Loged out!' })
}

exports.GetUsersList = function(req, res) {
    User.find(function(err, data) {
        res.json(data);
    });
}