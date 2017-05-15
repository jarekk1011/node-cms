const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugHero = require('mongoose-slug-hero');

const TagSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
});

TagSchema.plugin(slugHero, { field: 'title' });

module.exports = mongoose.model('Tag', TagSchema);