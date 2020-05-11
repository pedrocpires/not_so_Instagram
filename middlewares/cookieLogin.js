const Sequelize = require('sequelize');
const config = require('../config/database');
const {User} = require('../models');


const cookieLogin = async (req, res, next) => {
    if (req.cookies.userLogged != undefined && req.session.user == undefined){
        let userLogged = await User.findOne({
            where: {
                username: req.cookies.userLogged.username
            }
        })
        if (userLogged != '') {
            if (req.cookies.userLogged.password === userLogged.password) {
                req.session.user = userLogged;
            }
        }
    }
    
    next();

}

module.exports = cookieLogin;