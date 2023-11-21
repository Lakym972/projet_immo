const UsersRepository = require('../repository/UsersRepository.js');
const Users = require('../entity/Users.js');
const bcrypt = require('bcryptjs');


class RegisterController {

    register(req, res) {
        res.render('register/index')
    }

    process(req, res) {
        let entity = new Users();
        entity.setFirstname(req.body.firstname)
        .setLastname(req.body.lastname)
        .setEmail(req.body.email)
        .setPassword(bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)))
        .setPhone(req.body.phone)
        .setGender(req.body.gender);

        const UserRepo = new UsersRepository();
        
        UserRepo.existEmail(entity.getEmail()).then(emailexist => {
            if (emailexist) {
                res.render('register/index', {error : `Cet email existe déja`}); 
            } else {
                UserRepo.add(entity);
                req.flash('notify', 'Votre compte à bien été créé.');
                res.redirect('/');
            }
        });

    }
}

module.exports = new RegisterController();