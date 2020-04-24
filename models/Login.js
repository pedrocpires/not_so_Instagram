const Sequelize = require('sequelize');
const config = require('../config/database');

const conection = new Sequelize(config);

function loginAccount(user) {
    return conection.query(`SELECT * FROM user WHERE username = :user;`, {
        replacements: {
            user
        },
        type: Sequelize.QueryTypes.SELECT
    })

}

module.exports = {loginAccount}