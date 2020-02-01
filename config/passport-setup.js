const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//does same as above
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-models'); 

passport.use(new GoogleStrategy({
    //options for the google strat
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
    //passport callback function
    console.log(profile); 
    new User({
        username: profile.displayName,
        googleId: profile.id
    }).save().then((newUser) => {
        console.log('new user created:' + newUser);
    });
    // User.findOrCreate({ googleId: profile.id }, (err, user) => {
    //      return done(err, user);
    })
) 

