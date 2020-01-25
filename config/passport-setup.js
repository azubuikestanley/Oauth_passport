const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');

passport.use(new GoogleStrategy({
    //options for the google strat
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
    //passport callback function
    console.log(profile);
    // User.findOrCreate({ googleId: profile.id }, (err, user) => {
    //      return done(err, user);
    })
)

// module.exports = passport;