const Sequelize = require('sequelize');
const config = require('../config/database');
const {User} = require('../models');

const conection = new Sequelize(config);

const userController = {
    index: (req, res) => {
        res.redirect('/');
    }
};

module.exports = userController;