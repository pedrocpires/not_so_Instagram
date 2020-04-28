const Sequelize = require('sequelize');
const config = require('../config/database');
const {User} = require('../models');

const conection = new Sequelize(config);

const userController = {
    userView: (req, res) => {
        let {fullname, username} = req.session.user;
        res.render('profile', {
            title: fullname + ' (@' + username + ') • not_so_Instagram',
            user: req.session.user
        });
    }
};

module.exports = userController;