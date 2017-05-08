const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');


// set up a mongoose model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    role: {
        type: String,
        enum: ['Member', 'Client', 'Admin'],
        default: 'Member'
    },
    google: {
        id: String,
        token: String,
    },
    isActive: Boolean,
    image: String
}, {
    timestamps: true
});

userSchema.pre('save', function save(next) {
    const user = this;
    if (!user.isModified('password')) { return next(); }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) { return next(err); }
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        cb(err, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);