'use strict'
const Category = require('../models/category.js');
class CategoryController {
    update(req, res) {
        // console.log(req.params);
        let id = req.params.id || '';
        if (id == '' || req.body.title == '') {
            return res.status(400).json({ success: false, msg: 'Server error try again!' });
        }
        let CategoryData = {};
        CategoryData.title = req.body.title;
        CategoryData.content = req.body.description;
        Category.update({ _id: id }, CategoryData, function(err, data) {
            res.status(200).json({ success: true, msg: "Category Updated!" });
        });
    }

    // Get Category by slug
    getById(req, res) {
            Category.findOne({
                _id: req.params.id
            }, (err, data) => {
                res.status(200).json(data);
            });
        }
        // ----- Create Category
    create(req, res) {
            let category = req.body;
            // console.log(req.body.title);
            if (category == null || category.title == '') {
                return res.sendStatus(400);
            }
            let categoryData = new Category();
            categoryData.title = category.title.toLowerCase();
            categoryData.content = category.description;

            categoryData.save(function(err) {
                if (err) {
                    console.log(err);
                    return res.sendStatus(400);
                }
                return res.sendStatus(200);
            });
        }
        // -----LIST ALL
    listAll(req, res) {
        let query = Category.find();
        query.sort('-created');
        query.exec((err, results) => {
            if (err) {
                console.log(err);
                return res.sendStatus(400);
            }

            for (var categoryKey in results) {
                if (results[categoryKey].content != null) {
                    results[categoryKey].content = results[categoryKey].content.substr(0, 400);
                }
            }

            return res.status(200).json(results);
        });
    }
    delete(req, res) {

    }
}
module.exports = new CategoryController();