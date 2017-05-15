'use strict'
// Dependencies
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const http = require('http');
const https = require('https');
const nunjucks = require('nunjucks');
const express = require('express');
const app = express();
const fs = require('fs');
const compression = require('compression');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const expressValidator = require('express-validator');
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');
const cors = require('cors');
const path = require('path');
const errorHandler = require('errorhandler');
const dateFilter = require('nunjucks-date-filter');
// const multer = require('multer');
const server = http.createServer(app);
var io = require('socket.io')(server);
const root = process.cwd();

dotenv.load({ path: '.env.config' });

// styles
import './public/assets/style/app.scss';

// google analitics
const ua = require('universal-analytics');
const visitor = ua('UA-97074565-1');
visitor.pageview("/").send();

const passportConfig = require('./config/passport');

io.on('connection', function(client) {
    io.sockets.emit('users-length', Object.keys(io.sockets.connected).length);
    client.on('disconnect', function() {
        io.sockets.emit('users-length', Object.keys(io.sockets.connected).length);
    });
    console.log('socket connected');
});

if (process.env.NODE_ENV === 'production') {
    app.use(compression());
    app.use(express.static(root + '/public'));
    app.set('views', path.join('public/templates'));
} else {
    app.use(express.static(root + '/dist/public'));
    app.set('views', path.join('dist/public/templates'));
}

app.use(function(req, res, next) {
    res.locals.url = req.protocol + '://' + req.get('host');
    next();
});



var envN = nunjucks.configure(app.get('views'), {
    autoescape: true,
    noCache: true,
    watch: true,
    express: app
});
// var nunjucksenv = new nunjucks.Environment();
// console.log(nunjucksenv);
envN.addFilter('date', dateFilter);
app.set('view engine', 'nunjucks');

// app.use(multer({ dest: root + '/dist/uploads/' }).any());
// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.set('trust proxy', 1);
app.use(cors());
app.use(cookieParser(process.env.SESSION_SECRET))
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 24 * 24 * 60 * 60
    }),
    rolling: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        ephemeral: true,
        maxAge: 300000 //5min
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(expressValidator());

console.log('ENV: ' + process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect(process.env.MONGODB_URI_PRODUCTION);
}
mongoose.Promise = Promise;

mongoose.connection.on('error', (err) => {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
    process.exit();
});

mongoose.connection.on('connected', () => console.log('mongo connected'));


//----- ROUTES-------
if (process.env.NODE_ENV === 'production') {
    app.get('/admin*', (req, res, next) => res.sendFile(root + '/public/admin.html'));
} else {
    app.get('/admin*', (req, res, next) => res.sendFile(root + '/dist/public/admin.html'));
}
// admin routes
app.use('/api/admin', require('./routes/admin.routes'));
app.use('/', require('./routes/auth.routes'));
// public routes
app.use('/', require('./routes/public.routes'));
// 404
app.get('*', (req, res) => res.status(404).render('404'));


// console.log(io);
app.use(errorHandler());
server.listen(PORT, () => console.log(`Listen on port: https://localhost:${PORT}`));