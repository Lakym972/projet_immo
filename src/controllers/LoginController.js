const UsersRepository = require('../repository/UsersRepository.js');
const bcrypt = require('bcryptjs');


class LoginController {

    login(req,res) {
        res.render('login/index');
    }

    auth(req,res) {
        let userRepo = new UsersRepository();
        userRepo.getUserByEmail(req.body.email).then(infosUser => {
           if(infosUser) {
            if (bcrypt.compareSync(req.body.password, infosUser.password)) {
                req.session.user = {
                    id : infosUser.id,
                    gender : infosUser.gender,
                    firstname : infosUser.firstname,
                    lastname : infosUser.lastname,
                    email : infosUser.email
                };
                req.flash('notify', 'Vous êtes maintenant connecté(e)');
                res.redirect('/');
                return;
            }
           }
            res.render('login/index', {error : 'Identifiant incorrect', email : req.body.email})
           
        });
    }

    logout(req,res) {
        req.session.user = null;
        req.flash('notify', 'Vous êtes maintenant déconnecté(e)');
        res.redirect('/');
    }
}

module.exports = new LoginController();