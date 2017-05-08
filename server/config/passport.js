const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// load up the user model
var User = require('../models/user');
var config = require('./database'); // get db config file

var configAuth = require('./auth');

// console.log(User);
// module.exports = function(passport) {
//   var opts = {};
//   opts.secretOrKey = config.secret;
//   passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     User.findOne({id: jwt_payload.id}, function(err, user) {
//           if (err) {
//               return done(err, false);
//           }
//           if (user) {
//               done(null, user);
//           } else {
//               done(null, false);
//           }
//       });
//   }));
// };

// module.exports = function(passport) {
passport.serializeUser((user, done) => {
    // console.log(user);
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    session: true,
    passReqToCallback: true,
}, (req, email, password, done) => {
    // console.log(email);

    User.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) { return done(err); }
        if (!user) {
            return done(null, false, { msg: `Email ${email} not found.` });
        }
        if (!user.password) {
            return done(null, false, { msg: 'Password not found, log in to your social account' })
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err) { return done(err); }
            if (isMatch) {
                req.session.authenticated = true;
                return done(null, user);
            }
            return done(null, false, { msg: 'Invalid email or password.' });
        });
    });

}));

passport.use(new GoogleStrategy({

        clientID: configAuth.googleAuth.clientID,
        clientSecret: configAuth.googleAuth.clientSecret,
        callbackURL: configAuth.googleAuth.callbackURL,

    },
    function(token, refreshToken, profile, done) {

        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        process.nextTick(function() {

            // try to find the user based on their google id
            User.findOne({ 'google.id': profile.id }, function(err, user) {
                if (err)
                    return done(err);

                if (user) {

                    // if a user is found, log them in
                    return done(null, user);
                } else {
                    // if the user isnt in our database, create a new user
                    var newUser = new User();

                    // set all of the relevant information
                    newUser.google.id = profile.id;
                    newUser.google.token = token;
                    // newUser.google.name = profile.displayName;
                    newUser.name = profile.displayName;
                    // newUser.google.email = profile.emails[0].value; // pull the first email
                    newUser.email = profile.emails[0].value;

                    // save the user
                    newUser.save(function(err) {
                        if (err) {
                            throw err;
                        }
                        return done(null, newUser);
                    });
                }
            });
        });

    }));


// }




/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.json({ authentication: true });
};

// exports.auth = (req, res, next) => {
//   // console.log(req.session);
// };

/**
 * Authorization Required middleware.
 */
exports.isAuthorized = (req, res, next) => {
    const provider = req.path.split('/').slice(-1)[0];
    const token = req.user.tokens.find(token => token.kind === provider);
    if (token) {
        next();
    } else {
        res.json({ authentication: true });
        // res.redirect(`/auth/${provider}`);
    }
};