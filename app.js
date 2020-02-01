const express = require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();

//setup view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));


//initialize passport
app.use(passport.initialize());
app.use(passport.session());


//connect to mongodb
mongoose
    .connect(keys.mongodb.dbURI,{ 
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false, 
        useUnifiedTopology: true
        }, () => {
            console.log('connected to mongoDB...');
    });

//set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
// app.use(require('./config/passport-setup'));


//create home route
app.get('/', (req, res) => {
    res.render('home', { user: req.user });
});

app.listen(4000, () => {
    console.log('app now listening for request on port 4000');
});

