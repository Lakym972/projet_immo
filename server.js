const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const flash = require('express-flash-messages');
const Mailjet = require('node-mailjet');
require('dotenv').config();


app.use(session({secret: process.env.APP_KEY, resave:false, saveUninitialized:false, cookie: {maxAge:3600000}}));
// FAKE SESSION
if(process.env.APP_ENV === 'dev') {
    app.use((req,res, next) => {
        req.session.user = {
            id : '2',
            gender : '1',
            firstname : 'Anthony',
            lastname : 'PIERRE-CHARLES',
            email : 'thor@gmail.com'
        };
        next();
    });
}
app.use((req,res, next) => {
    res.locals.session = req.session;
    next();
})
app.use(flash());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

const router = require(path.join(__dirname, 'app', 'route.js'));
router(app);

app.listen(process.env.PORT, () => {
    if (process.env.APP_ENV == 'dev') {
        console.log(`Server is running on http://localhost:${process.env.PORT}`);
    }
});