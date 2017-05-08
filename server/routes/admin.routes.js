'use strict'
const PostController = require('../controllers/PostController.js');
const express = require('express');
const MessageModel = require('../models/message');
var fs = require('fs');
var mongoose = require('mongoose');
// var multiparty = require('connect-multiparty')();
// Router
const controllers = {};
var Post = require('../models/post.js');


controllers.user = require('../controllers/UserController.js');
var ChatController = require('../controllers/ChatController');
const UserController = require('../controllers/UserController.js');


// PostController = new PostController();
// console.log(PostController);

const API_AUTHENTICATION = controllers.user.authenticate;


module.exports = (function() {
    let admin = express.Router();
    // admin.get('/checksession', (req, res, next) => {
    //     // console.log(req.user);
    //     res.json(req.user);
    // });

    admin.post('/signup', controllers.user.create);
    admin.get('/auth', function(req, res) {
        // console.log()
        if (!req.isAuthenticated()) {
            return res.sendStatus(401);
        }
        res.send(req.isAuthenticated() ? req.user : '0');
    });

    admin.post('/logout', controllers.user.postLogout);

    admin.post('/login', controllers.user.postLogin);

    admin.get('/listusers', API_AUTHENTICATION, controllers.user.GetUsersList);
    // View messages to and from authenticated user
    admin.get('/chat', API_AUTHENTICATION, ChatController.getConversations);

    // Retrieve single conversation
    admin.get('/chat/:conversationId', API_AUTHENTICATION, ChatController.getConversation);

    // Send reply in conversation
    admin.post('/chat/:conversationId', API_AUTHENTICATION, ChatController.sendReply);

    // Start new conversation
    admin.post('/chat/new/:recipient', API_AUTHENTICATION, ChatController.newConversation);

    // passportConfig.isAuthenticated,

    admin.get('/memberinfo', API_AUTHENTICATION, UserController.auth);

    // admin.get('/chat', API_AUTHENTICATION, function(req, res) {
    //     // console.log('ddd');
    //     MessageModel.find({ public: true }, function(err, data) {
    //         res.status(200).json({
    //             success: true,
    //             data: data,
    //         });
    //     });
    // });


    // Create Post
    admin.post('/post', API_AUTHENTICATION, PostController.create);
    admin.get('/post', API_AUTHENTICATION, PostController.listAll);
    // Read post
    admin.get('/post/:id', API_AUTHENTICATION, PostController.getPostBySlug);
    admin.put('/post/:id', API_AUTHENTICATION, PostController.update);




    // admin.post('/upload/:id', multiparty, function(req, res) {
    //     var db = mongoose.connection.db;
    //     var mongoDriver = mongoose.mongo;
    //     var gfs = new Gridfs(db, mongoDriver);
    //     var writestream = gfs.createWriteStream({
    //         filename: req.files.file.name,
    //         mode: 'w',
    //         content_type: req.files.file.mimetype,
    //         metadata: req.body
    //     });
    //     fs.createReadStream(req.files.file.path).pipe(writestream);
    //     writestream.on('close', function(file) {
    //         Post.findById(req.params.id, function(err, post) {
    //             // handle error
    //             post.file = file._id;
    //             post.save(function(err, updatedPost) {
    //                 // handle error
    //                 return res.json(200, updatedPost)
    //             })
    //         });
    //         fs.unlink(req.files.file.path, function(err) {
    //             // handle error
    //             console.log('success!')
    //         });
    //     });
    // });

    return admin;
})();