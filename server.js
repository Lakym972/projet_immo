const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index')
});

app.listen(process.env.PORT, () => {
    if (process.env.APP_ENV == 'dev') {
        console.log(`Server is running on http://localhost:${process.env.PORT}`);
    }
});