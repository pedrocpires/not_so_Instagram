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
        res.redirect('/accounts/edit')
    },
    showNewPost: (req, res) => {
        res.render('newpost', {
            title: 'New Post • not_so_Instagram',
            user: req.session.user
        })
    },
    createNewPost: async (req, res, next) => {
        let [photo] = req.files;
        let {caption} = req.body;
        await Post.create({
            image_post: path.relative('public/', photo.path),
            likes: 0,
            caption: caption,
            id_user: req.session.user.id
        })
        res.redirect('/')
    }
}

module.exports = accountController;