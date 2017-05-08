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

const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const expressValidator = require('express-validator');
const config = require('./config/database'); // get db config file
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');
const cors = require('cors');
const path = require('path');
const errorHandler = require('errorhandler');
const PostController = require('./controllers/PostController.js');
const multer = require('multer');
// var sslOptions = {
//     key: fs.readFileSync(path.resolve('./server/localhost.key')),
//     // cert: fs.readFileSync(path.resolve('./server/localhost.csr'))
// };
const server = http.createServer(app);
var io = require('socket.io')(server);


// google analitics
const ua = require('universal-analytics');
const visitor = ua('UA-97074565-1');
visitor.pageview("/").send();


const root = process.cwd();

dotenv.load({ path: '.env.config' });




const passportConfig = require('./config/passport');

// console.log(passportConfig.isAuthenticated);
// Models
const UserModel = require('./models/user'); // get the mongoose model
const MessageModel = require('./models/message');
// const RoomsModel       = require('./server/models/rooms');


// app.use('/uploads', express.static(root + '/uploads'));
var uuid = require('node-uuid');


io.on('connection', function(client) {
    io.sockets.emit('users-length', Object.keys(io.sockets.connected).length);
    client.on('disconnect', function() {
        io.sockets.emit('users-length', Object.keys(io.sockets.connected).length);
    });

    console.log('public socket connected');
});
//   client.on('join', (user) => {
//         console.log(user);
//         // people[client.id] = { "name": name, "room": roomID };
//         // client.emit("update", "You have connected to the server.");
//         // socket.sockets.emit("update", people[client.id].name + " is online.")
//         // socket.sockets.emit("update-people", people);
//         // client.emit("roomList", { rooms: rooms });
//         // clients.push(client);

//     });;


//     client.on('message', function(data) {
//         console.log(data);
//     });



app.use(function(req, res, next) {
    res.locals.url = req.protocol + '://' + req.get('host');
    next();
});

app.set('views', path.join(root, '/public/templates'));

nunjucks.configure(app.get('views'), {
    autoescape: true,
    noCache: true,
    watch: true,
    express: app
});
app.set('view engine', 'nunjucks');

// app.use(multer({ dest: root + '/dist/uploads/' }).any());
// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(root + '/dist'));
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
// log to console
app.use(morgan('dev'));
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.Promise = Promise;

mongoose.connection.on('error', (err) => {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
});

mongoose.connection.on('connected', () => console.log('mongo connected'));


// var count = 0;


// locals
// app.use('*', (req, res, next) => {
//   res.locals.posts = PostController.listAllPublic;
//   // console.log(PostController.listAllPublic);
//   next();
// });



//----- ROUTES-------
// app.all('/api/v1/*', [require('./middlewares/validateRequest')]);
app.get('/admin*', (req, res, next) => res.sendFile(root + '/dist/admin.html'));
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