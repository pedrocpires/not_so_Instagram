const Sequelize = require('sequelize');
const config = require('../config/database');
const {User} = require('../models');

const conection = new Sequelize(config);

const userController = {
    index: (req, res) => {
        // let {fullname, username} = req.session.user;
        // console.log(req)
        // res.render('profile', {
        //     title: fullname + ' (@' + username + ') • not_so_Instagram',
        //     user: req.session.user
        // });
        res.redirect('/');
    }
};

module.exports = userController;