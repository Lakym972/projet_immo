let homeController = require('../src/controllers/HomeController.js');
let registerController = require('../src/controllers/RegisterController.js');

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
}

