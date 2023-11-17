class RegisterController {

    register(req, res) {
        res.render('register/register')
    }
}

module.exports = new RegisterController();