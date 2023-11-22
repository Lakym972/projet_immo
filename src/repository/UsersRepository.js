const { compare } = require('bcryptjs');
const con = require('../../app/database_sql.js');
module.exports = class UsersRepository {

    async add(user) {
        await con.promise().query('INSERT INTO `users` SET ?', user);
    }

    async existEmail(email) {
       return await con.promise().query('SELECT `id` FROM `users` WHERE ?', { email }).then((result) => {
            return (result[0].length > 0);
        });
    }

    async getUserByEmail(email) {
       return await con.promise().query('SELECT * FROM `users` WHERE ?', { email }).then((result) => {
            return (result[0].length > 0 ? result[0][0] : null);
        });
    }

    async getAllUsers() {
        return await con.promise().query('SELECT * FROM `users`').then((result) => {
            return (result[0].length != 0 ? result[0] : null);
        });
    }
    
    async deleteUser(id) {
        await con.promise().query('DELETE FROM `users` WHERE ?', { id });
    }

    async getUserById(id) {
        return await con.promise().query('SELECT * FROM `users` WHERE ?', { id }).then((result) => {
             return (result[0].length > 0 ? result[0][0] : null);
         });
    }

    async editUser(user, id) {
        return await con.promise().query(
            'UPDATE `users` SET `firstname` = ?, `lastname` = ?, `email` = ?, `gender` = ? WHERE `users`.`id`= ?', 
            [user.firstname, user.lastname, user.email, user.gender, id]
        );
    }
}