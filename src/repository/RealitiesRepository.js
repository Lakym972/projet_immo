const con = require('../../app/database_sql.js');


module.exports = class UsersRepository {
    
    async add(realitie) {
        return await con.promise().query('INSERT INTO `realities` SET ?', realitie);
    }

    async getAllRealities() {
        return await con.promise().query('SELECT * FROM `realities` INNER JOIN `contacts` ON `realities`.`contact_id` = `contacts`.`id`').then((result) => {
            return (result[0].length != 0 ? result[0] : null);
        });
    }

    async deleteRealities(id) {
        return await con.promise().query('DELETE FROM `realities` WHERE ?', { id });
    }

    async getRealitiesById(id) {
        return await con.promise().query('SELECT * FROM `realities` WHERE ?', { id }).then((result) => {
             return (result[0].length > 0 ? result[0][0] : null);
         });
    }
    
    async updateRealities(id, realitie) {
        return await con.promise().query('UPDATE `realities` SET ? WHERE ?', [realitie, {id}] );
    }
}