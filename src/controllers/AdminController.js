const UsersRepository = require('../repository/UsersRepository.js');

class AdminController {

    index(req, res) {
        res.render('admin/index');
    }

    list(req, res) {
        let userRepo = new UsersRepository();
        userRepo.getAllUsers().then(infosUSers => {
            if (infosUSers) {
                req.users = {
                    id : infosUSers.id,
                    firstname : infosUSers.firstname,
                    lastname : infosUSers.lastname,
                    email : infosUSers.email,
                    password : infosUSers.password,
                    phone : infosUSers.phone
                };
            }
            console.log(infosUSers);
        })

        res.render('admin/list');
    }
}

module.exports = new AdminController();