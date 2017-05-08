let callbackURL

if (process.env.NODE_ENV === 'production') {
    callbackURL = process.env.CALLBACK_URL_PRODUCTION;
} else {
    callbackURL = process.env.CALLBACK_URL;
}
module.exports = {
    'googleAuth': {
        'clientID': process.env.CLIENT_ID,
        'clientSecret': process.env.CLIENT_SECRET,
        'callbackURL': callbackURL
    }
}