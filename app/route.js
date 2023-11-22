let homeController = require('../src/controllers/HomeController.js');
let registerController = require('../src/controllers/RegisterController.js');
let loginController = require('../src/controllers/LoginController.js');
let adminController = require('../src/controllers/AdminController.js');

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

    app.get('/admin', (req, res) => {
        adminController.index(req, res)
    });

    app.get('/admin/user/list', (req, res) => {
        adminController.list(req, res)
    });

    app.get('/admin/user/delete/:id([0-9]+)', (req, res) => {
        adminController.supp(req, res)
    });

    app.get('/admin/user/edit/:id([0-9]+)', (req, res) => {
        adminController.edit(req, res)
    });

    app.post('/admin/user/edit/:id([0-9]+)', (req, res) => {
        adminController.update(req, res)
    });

}

