'use strict'
var Post = require('../models/post.js');
class PostController {
    // read post
    read(req, res) {
            var id = req.params.id || '';
            if (id == '') {
                return res.sendStatus(400);
            }
            Post.find({
                public: true
            }, function(err, data) {
                res.status(200).json({
                    success: true,
                    data: data,
                });
            });
        }
        // update post
    update(req, res) {
        // console.log(req.params);
        let id = req.params.id || '';
        if (id == '' || req.body.title == '' || req.body.content == '') {
            return res.status(400).json({ success: false, msg: 'Server error try again!' });
        }
        let PostData = {};
        PostData.title = req.body.title;
        PostData.content = req.body.content;
        PostData.updatedBy = req.user._id;
        if (req.body.public) {
            PostData.public = req.body.public;
        }
        Post.update({ _id: id }, PostData, function(err, data) {
            res.status(200).json({ success: true, msg: "Post Updated!" });
        });
    }

    // Get post by slug
    getPostBySlug(req, res) {
            console.log(req.params);
            // console.log(req.params.slug);
            Post.findOne({
                _id: req.params.id
            }, (err, post) => {
                // console.log(res);
                res.json(post);
            });
            // query.select(publicFields);
            // query.exec(function(err, result) {
            //     if (err) {
            //         console.log(err);
            //         return res.sendStatus(400);
            //     }

            //     if (result != null) {
            //         result.update({
            //             $inc: {
            //                 read: 1
            //             }
            //         }, function(err, nbRows, raw) {
            //             // return res.json(200, result);
            //             return result;
            //         });
            //     } else {
            //         return res.sendStatus(400);
            //     }
            // });
        }
        // ----- Create post
    create(req, res) {
            var post = req.body;
            if (post == null || post.title == '' || post.editor == '') {
                return res.sendStatus(400);
            }

            var postEntry = new Post();
            postEntry.title = post.title;
            postEntry.content = post.content;
            postEntry.createdBy = req.user._id;
            postEntry.save(function(err) {
                if (err) {
                    console.log(err);
                    return res.sendStatus(400);
                }

                return res.sendStatus(200);
            });
        }
        // -----LIST ALL POSTS
    listAll(req, res) {
        var query = Post.find();
        query.sort('-created');
        query.exec((err, results) => {
            if (err) {
                console.log(err);
                return res.sendStatus(400);
            }

            for (var postKey in results) {
                if (results[postKey].content != null) {
                    results[postKey].content = results[postKey].content.substr(0, 400);
                }
            }

            // local.posts = results;

            return res.status(200).json(results);
        });
    }
}
module.exports = new PostController();