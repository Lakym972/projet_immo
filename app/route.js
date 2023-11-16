let homeController = require('../src/controllers/HomeController.js');

module.exports = (app) => {

    app.get('/', (req, res) => {
        homeController.index(req, res)
    });
}