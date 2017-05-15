const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugHero = require('mongoose-slug-hero');

const CategorySchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
});

CategorySchema.plugin(slugHero, { field: 'title' });

module.exports = mongoose.model('Category', CategorySchema);