'use strict'
const express = require('express');
const MessageModel = require('../models/message');
var fs = require('fs');
var mongoose = require('mongoose');
// var multiparty = require('connect-multiparty')();
// Router
var Post = require('../models/post.js');


const ChatController = require('../controllers/ChatController');
const UserController = require('../controllers/UserController.js');
const PostController = require('../controllers/PostController.js');
const CategoryController = require('../controllers/CategoryController.js');
const TagController = require('../controllers/TagController.js');


const API_AUTHENTICATION = UserController.authenticate;


module.exports = (function() {
    let admin = express.Router();

    admin.post('/signup', UserController.create);
    admin.get('/auth', function(req, res) {
        // console.log()
        if (!req.isAuthenticated()) {
            return res.sendStatus(401);
        }
        res.send(req.isAuthenticated() ? req.user : '0');
    });

    admin.post('/logout', UserController.postLogout);

    admin.post('/login', UserController.postLogin);

    admin.get('/listusers', API_AUTHENTICATION, UserController.GetUsersList);
    // View messages to and from authenticated user
    admin.get('/conversations', API_AUTHENTICATION, ChatController.getConversations);

    // Retrieve single conversation
    admin.get('/chat/:conversationId', API_AUTHENTICATION, ChatController.getConversation);
    admin.post('/chat/:conversationId', API_AUTHENTICATION, ChatController.sendReply);
    admin.post('/chat/new/:recipient', API_AUTHENTICATION, ChatController.newConversation);


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


    // Posts
    admin.post('/post', API_AUTHENTICATION, PostController.create);
    admin.get('/post', API_AUTHENTICATION, PostController.listAll);
    admin.get('/post/:id', API_AUTHENTICATION, PostController.getPostBySlug);
    admin.put('/post/:id', API_AUTHENTICATION, PostController.update);
    admin.delete('/post/:id', API_AUTHENTICATION, PostController.delete);
    // Categories
    admin.post('/category', API_AUTHENTICATION, CategoryController.create);
    admin.get('/category/:id', API_AUTHENTICATION, CategoryController.getById);
    admin.get('/category-list', API_AUTHENTICATION, CategoryController.listAll);
    admin.put('/category/:id', API_AUTHENTICATION, CategoryController.update);
    admin.delete('/category/:id', API_AUTHENTICATION, CategoryController.delete);

    // Tags
    admin.post('/tag', API_AUTHENTICATION, TagController.create);
    admin.get('/tag/:id', API_AUTHENTICATION, TagController.getById);
    admin.get('/tag-list', API_AUTHENTICATION, TagController.listAll);
    admin.put('/tag/:id', API_AUTHENTICATION, TagController.update);
    admin.delete('/tag/:id', API_AUTHENTICATION, TagController.delete);





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