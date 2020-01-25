const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

const app = express();

//setup view engine
app.set('view engine', 'ejs');

//set up routes
app.use('/auth', authRoutes);
// app.use(require('./config/passport-setup'));


//create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(4000, () => {
    console.log('app now listening for request on port 4000');
});

