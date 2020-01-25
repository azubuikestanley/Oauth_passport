const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

passport.use(new GoogleStrategy({
    //options for the google strat
    }), () => {
    //passport callback function
    }
)