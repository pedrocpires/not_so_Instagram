const Sequelize = require('sequelize');
const config = require('../config/database');
const {
    User
} = require('../models');

const conection = new Sequelize(config);

const accountController = {
    index: (req, res) => {
        res.render('editProfile', {
            title: 'Edit Profile • not_so_Instagram',
            user: req.session.user
        });
    },
    update: async (req, res) => {
        let {fullname, username, website, biography, email, phone, gender} = req.body;
        await User.update({
            fullname: fullname,
            username: username,
            website: website,
            biography: biography,
            email: email,
            phone: phone,
            gender: gender
        }, {
            where: {
                id: req.session.user.id
            }
        });
        req.session.user = await User.findOne({
            where: {
                id: req.session.user.id
            }
        })
        res.redirect('/accounts/edit')
    },
    logout: (req, res) => {
        req.session.user = undefined;
        res.redirect('/login')
    }
}

module.exports = accountController;