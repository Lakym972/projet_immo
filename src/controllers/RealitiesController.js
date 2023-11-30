const Realities = require('../entity/Realities.js');
const RealitiesRepository = require('../repository/RealitiesRepository.js');

const Contacts = require('../entity/Contacts.js');
const ContactsRepository = require('../repository/ContactsRepository.js');

class RealitiesController {

    index(req, res) {
        const RealitiesRepo = new RealitiesRepository();
        RealitiesRepo.getAllRealities().then(infosRealities => {
            if (infosRealities) {
                res.render('admin/realities/index', {realities : infosRealities});
            } else {
                res.render('admin/realities/index')
            }
        });   
    }

    register(req, res) {
        res.render('admin/realities/register')
    }

    process(req, res) {
        let entityContacts = new Contacts();
        const ContactsRepo = new ContactsRepository();

        entityContacts.setFirstname(req.body.firstname)
        .setLastname(req.body.lastname)
        .setEmail(req.body.email)
        .setMobile(req.body.mobile)
        .setPhone(req.body.phone)
        .setGender(req.body.gender)
        .setInfo_contact(req.body.info_contact);

        ContactsRepo.add(entityContacts).then((contact) => {
            let entityRealities = new Realities();
            const RealitiesRepo = new RealitiesRepository();
            entityRealities
            .setUser_id(req.session.user.id)
            .setContact_id(contact[0].insertId)
            .setAddress1(req.body.address1)
            .setAddress2(req.body.address2)
            .setTown(req.body.town)
            .setZipcode(req.body.zipcode)
            .setInfo_address(req.body.info_address)
            .setType(req.body.type)
            .setArea(req.body.area || 0)
            .setRoom(req.body.room || 0 )
            .setPrice(req.body.price || 0)
            .setSold(req.body.sold || 0)
            .setOnline(req.body.online || 0)
            .setInfo(req.body.info)
            .setCreated_data(new Date());

            RealitiesRepo.add(entityRealities).then(() => {
                req.flash('notify', 'Votre bien à été créé avec succès.');
                res.redirect('/admin/realities');
            });    
        });
    }

    supp(req, res) {
        const RealitiesRepo = new RealitiesRepository();
        RealitiesRepo.deleteRealities(req.params.id).then(() => {
                req.flash('notify', 'Bien supprimé(e)');
                res.redirect('/admin/realities');
        });
    }

    edit(req, res) {
        const ContactsRepo = new ContactsRepository();
        ContactsRepo.getContactById(req.params.id).then(infosContacts => {
            if (infosContacts) {
                const RealitiesRepo = new RealitiesRepository();
                RealitiesRepo.getRealitiesById(req.params.id).then(infosRealities => {
                    res.render('admin/realities/edit', {
                        // contact
                        firstname : infosContacts.firstname,
                        lastname : infosContacts.lastname,
                        email : infosContacts.email,
                        phone : infosContacts.phone,
                        mobile : infosContacts.mobile,
                        gender : infosContacts.gender,
                        info_contact : infosContacts.info_contact,
                        //realty
                        address1 : infosRealities.address1,
                        address2 : infosRealities.address2,
                        town : infosRealities.town,
                        zipcode : infosRealities.zipcode,
                        info_address : infosRealities.info_address,
                        type : infosRealities.type,
                        area : infosRealities.area,
                        room : infosRealities.room,
                        price : infosRealities.price,
                        info : infosRealities.info
                    });
                });
            }
        });
    }

    update(req, res) {
        let entityContacts = new Contacts();
        const ContactsRepo = new ContactsRepository();

        entityContacts.setFirstname(req.body.firstname)
        .setLastname(req.body.lastname)
        .setEmail(req.body.email)
        .setMobile(req.body.mobile)
        .setPhone(req.body.phone)
        .setGender(req.body.gender)
        .setInfo_contact(req.body.info_contact);

        ContactsRepo.updateContact(entityContacts, req.params.id).then((contact) => {
            let entityRealities = new Realities();
            const RealitiesRepo = new RealitiesRepository();
            entityRealities
            .setUser_id(req.session.user.id)
            .setContact_id(contact[0].insertId)
            .setAddress1(req.body.address1)
            .setAddress2(req.body.address2)
            .setTown(req.body.town)
            .setZipcode(req.body.zipcode)
            .setInfo_address(req.body.info_address)
            .setType(req.body.type)
            .setArea(req.body.area || 0)
            .setRoom(req.body.room || 0 )
            .setPrice(req.body.price || 0)
            .setSold(req.body.sold || 0)
            .setOnline(req.body.online || 0)
            .setInfo(req.body.info)
            .setCreated_data(new Date());

            RealitiesRepo.updateRealities(entityRealities, req.params.id).then(() => {
                req.flash('notify', 'Votre bien à été modifié avec succès.');
                res.redirect('/admin/realities');
            });    
        });
    }
}

module.exports = new RealitiesController();