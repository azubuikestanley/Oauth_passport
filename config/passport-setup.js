const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('./key');

passport.use(new GoogleStrategy({
    //options for the google strat
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
    }), () => {
    //passport callback function
    }
)

