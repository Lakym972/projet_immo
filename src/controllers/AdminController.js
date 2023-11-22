const UsersRepository = require('../repository/UsersRepository.js');
const Users = require('../entity/Users.js');
class AdminController {

    index(req, res) {
        res.render('admin/index');
    }

    list(req, res) {
        let userRepo = new UsersRepository();
        userRepo.getAllUsers().then(infosUSers => {
            if (infosUSers) {
                res.render('admin/user/list', {users : infosUSers});
            }
        });
    }

    supp(req, res) {
        let userRepo = new UsersRepository();

        userRepo.deleteUser(req.params.id).then(() => {
                req.flash('notify', 'Utilisateur supprimé(e)');
                res.redirect('/admin/user/list');
        })
    }

    edit(req, res) {
        let userRepo = new UsersRepository();
        userRepo.getUserById(req.params.id).then(infosUSer => {
            res.render('admin/user/edit', {
                firstname : infosUSer.firstname,
                lastname : infosUSer.lastname,
                email : infosUSer.email,
                phone : infosUSer.phone
            });
    })
    }

    update(req, res) {
        let userRepo = new UsersRepository();
        let entity = new Users();

        entity.setFirstname(req.body.firstname)
            .setLastname(req.body.lastname)
            .setEmail(req.body.email)
            .setPassword(req.body.password)
            .setPhone(req.body.phone)
            .setGender(req.body.gender);

        userRepo.editUser(entity, req.params.id).then((result) => {
            req.flash('notify', 'Utilisateur modifié(e)');
            res.redirect('/admin/user/list');
        });
    }

}

module.exports = new AdminController();