const Login = require('../models/Login')

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
        let userSelected = await Login.loginAccount(user);

        if (userSelected != '') {
            if (password === userSelected[0].password) {
                res.render('profile', {
                    title: userSelected[0].fullname + ' (@' + userSelected[0].username + ')' + ' • not_so_Instagram photos and videos'
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