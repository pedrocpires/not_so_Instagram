const Sequelize = require('sequelize');
const config = require('../config/database');

const conection = new Sequelize(config);

const loginController = {
    createAccountForm: (req, res) => {
        res.render('signup', {
            title: 'not_so_Instagram'
        });
    },
    createAccount: (req, res) => {
        console.log(req.body)
        console.log('teste')
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
    },
    loginAccountForm: (req, res, next) => {
        res.render('login', {
            title: 'not_so_Instagram'
        });
    },
    loginAccount: async (req, res) => {
        let {
            user,
            password
        } = req.body;
        let selectReturn = await conection.query(`SELECT * FROM user WHERE username = :user;`, {
            replacements: {
                user
            },
            type: Sequelize.QueryTypes.SELECT
        })
        if (selectReturn != '') {
            if (password === selectReturn[0].password) {
                res.render('profile', {
                    title: selectReturn[0].fullname + ' (@' + selectReturn[0].username + ')' + ' • not_so_Instagram photos and videos'
                })
            } else {
                return res.render('login', {
                    title: 'not_so_Instagram',
                    msg: "Sorry, your password was incorrect. Please double-check your password."
                })
            }
        } else {
            return res.render('login', {
                title: 'not_so_Instagram',
                msg: "The username you entered doesn't belong to an account. Please check your username and try again."
            })
        }


    }
}

module.exports = loginController;