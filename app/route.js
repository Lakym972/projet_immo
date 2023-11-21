let homeController = require('../src/controllers/HomeController.js');
let registerController = require('../src/controllers/RegisterController.js');
let loginController = require('../src/controllers/LoginController.js');

module.exports = (app) => {

    app.get('/', (req, res) => {
        homeController.index(req, res)
    });

    app.post('/', (req, res) => {
        homeController.index(req, res)
    });

    app.get('/register', (req, res) => {
        registerController.register(req, res)
    });

    app.post('/register', (req, res) => {
        registerController.process(req, res)
    });

    app.get('/login', (req, res) => {
        loginController.login(req, res)
    });

    app.post('/login', (req, res) => {
        loginController.auth(req, res)
    });

    app.get('/login/logout', (req, res) => {
        loginController.logout(req, res)
    });
}

