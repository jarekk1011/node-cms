'use strict'
const Tag = require('../models/tag.js');
class TagController {
    update(req, res) {
        // console.log(req.params);
        let id = req.params.id || '';
        if (id == '' || req.body.title == '') {
            return res.status(400).json({ success: false, msg: 'Server error try again!' });
        }
        let TagData = {};
        TagData.title = req.body.title;
        TagData.description = req.body.description;
        Tag.update({ _id: id }, TagData, function(err, data) {
            res.status(200).json({ success: true, msg: "Tag Updated!" });
        });
    }

    // Get Tag by slug
    getById(req, res) {
            Tag.findOne({
                _id: req.params.id
            }, (err, data) => {
                res.status(200).json(data);
            });
        }
        // ----- Create Tag
    create(req, res) {
            let tag = req.body;
            // console.log(req.body.title);
            if (tag == null || tag.title == '') {
                return res.sendStatus(400);
            }
            let tagData = new Tag();
            tagData.title = tag.title.toLowerCase();
            tagData.description = tag.description;

            tagData.save(function(err) {
                if (err) {
                    console.log(err);
                    return res.sendStatus(400);
                }
                return res.sendStatus(200);
            });
        }
        // -----LIST ALL
    listAll(req, res) {
        let query = Tag.find();
        query.sort('-created');
        query.exec((err, results) => {
            if (err) {
                console.log(err);
                return res.sendStatus(400);
            }

            for (var tagKey in results) {
                if (results[tagKey].content != null) {
                    results[tagKey].content = results[tagKey].content.substr(0, 400);
                }
            }

            return res.status(200).json(results);
        });
    }
    delete(req, res) {

    }
}
module.exports = new TagController();