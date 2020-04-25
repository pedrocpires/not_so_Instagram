const Sequelize = require('sequelize');
const config = require('../config/database');

const conection = new Sequelize(config);

const signupController = {
    createAccountForm: (req, res) => {
        res.render('signup', {
            title: 'not_so_Instagram'
        });
    },
    createAccount: (req, res) => {
        let {
            email,
            fullname,
            username,
            password
        } = req.body;
        conection.query(`INSERT INTO user (fullname, email, username, password) VALUES (:fullname, :email, :username, :password);`, {
            replacements: {
                fullname,
                email,
                username,
                password
            },
            type: Sequelize.QueryTypes.INSERT
        })
        res.render('login',{
            title: 'not_so_Instagram',
            msg: 'Account created successfully. Please login to start.'
        });
    }
}

module.exports = signupController;