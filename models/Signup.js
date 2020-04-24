const Sequelize = require('sequelize');
const config = require('../config/database');

const conection = new Sequelize(config);

function createAccount(email, fullname, username, password) {
    conection.query(`INSERT INTO user (fullname, email, username, password) VALUES (:fullname, :email, :username, :password);`, {
        replacements: {
            fullname,
            email,
            username,
            password
        },
        type: Sequelize.QueryTypes.INSERT
    })
}

module.exports = {createAccount}