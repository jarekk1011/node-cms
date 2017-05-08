'use strict'
const PostController = require('../controllers/PostController.js');
const express = require('express');
const MessageModel = require('../models/message');
var Post = require('../models/post.js');
// Router
const controllers = {};



controllers.user = require('../controllers/UserController.js');


// PostController = new PostController();
// console.log(PostController);

const API_AUTHENTICATION = controllers.user.authenticate;

module.exports = (function() {
    let PublicRoute = express.Router();
    //   public.get('/checksession', (req, res, next) => {
    //     // console.log(req.user);
    //     res.json(req.user);
    //   });

    PublicRoute.get('/', function(req, res) {
        Post.find(function(err, data) {
            res.render('pages/index', { posts: data })
        });
    });

    PublicRoute.get('/photodiary', (req, res) => res.render('pages/photodiary'));
    PublicRoute.get('/lifestyle', (req, res) => res.render('pages/lifestyle'));
    PublicRoute.get('/music', (req, res) => res.render('pages/music'));
    PublicRoute.get('/travel', (req, res) => res.render('pages/travel'));


    // Read post
    PublicRoute.get('/post/:slug', (req, res) => {
        var query = Post.findOne({
            slug: req.params.slug
        });
        // query.select(publicFields);
        query.exec(function(err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(400);
            }

            if (result != null) {
                result.update({
                    $inc: {
                        read: 1
                    }
                }, function(err, nbRows, raw) {
                    // console.log(result);
                    // console.log(req);
                    res.render('single/single', { post: result });
                });
            } else {
                return res.sendStatus(400);
            }
        });


    });
    // Create Post

    PublicRoute.get('/postListAll', API_AUTHENTICATION, PostController.listAll);

    return PublicRoute;
})();