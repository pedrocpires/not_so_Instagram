const Sequelize = require('sequelize');
const config = require('../config/database');
const path = require('path')
const {
    User, Post
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
        let {
            fullname,
            username,
            website,
            biography,
            email,
            phone,
            gender
        } = req.body;
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
        req.cookies.userLogged = undefined;
        res.redirect('/login')
    },
    updatePhoto: async (req, res) => {
        let [profilePhoto] = req.files
        await User.update({
            photo_profile: path.relative('public/', profilePhoto.path)
        }, {
            where: {
                id: req.session.user.id
            }
        })
        req.session.user = await User.findOne({
            where: {
                id: req.session.user.id
            }});
        res.redirect('/accounts/edit')
    },
    deletePhoto: async (req, res) => {
        await User.update({
            photo_profile: 'images/profilePhotos/defaultProfilePhoto.jpg'
        }, {
            where: {
                id: req.session.user.id
            }
        });
        req.session.user = await User.findOne({
            where: {
                id: req.session.user.id
            }});
        res.redirect('/accounts/edit')
    }
}
module.exports = accountController;
