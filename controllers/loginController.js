const Sequelize = require('sequelize');
const config = require('../config/database');
const {User} = require('../models');


const conection = new Sequelize(config);

const loginController = {
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

        let userLogged = await User.findOne({
            where: {
                username: user
            }
        })
        if (userLogged != '') {
            if (password === userLogged.password) {
                req.session.user = userLogged;
                res.redirect('/@' + userLogged.username)
            } else {
                return res.render('login', {
                    title: 'not_so_Instagram',
                    msg: "Sorry, your password /was incorrect. Please double-check your password."
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