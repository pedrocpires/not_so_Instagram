const Sequelize = require('sequelize');
const config = require('../config/database');

const conection = new Sequelize(config);

const loginController = {
    createAccount: (req, res) => {
        console.log(req.body)
        let {
            email,
            full_name,
            username,
            password
        } = req.body;
        // res.render('login', { title: 'not_so_Instagram' });
        res.redirect('/login');
    },
    loginAccount: (req, res, next) => {
        res.render('login', {
            title: 'not_so_Instagram'
        });
    },
    createAccountForm: (req,res) =>{
        res.render('signup', {
            title: 'not_so_Instagram'
        });
    }
}

module.exports = loginController;