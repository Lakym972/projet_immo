const con = require('../../app/database_sql.js');

module.exports = class ContactsRepository {

    async add(contact) {
        return await con.promise().query('INSERT INTO `contacts` SET ?', contact);
    }

    async getContactById(id) {
        return await con.promise().query('SELECT * FROM `contacts` WHERE ?', { id }).then((result) => {
             return (result[0].length > 0 ? result[0][0] : null);
         });
    }

    async updateContact(id, contact) {
        return await con.promise().query('UPDATE `contacts` SET ? WHERE ?', [contact, {id}] );
    }
}