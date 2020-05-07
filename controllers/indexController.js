const Sequelize = require('sequelize');
const config = require('../config/database');
const {
    User, Post,
} = require('../models');

const conection = new Sequelize(config);

const indexController = {
    index: async (req, res) => {
        let {fullname, username} = req.session.user;
        let posts = await Post.findAll({
            where: {
                id_user: req.session.user.id
            },
            include: {
                model: User,
                as: 'user',
                require: true
            }
        });
        res.render('profile', {
            title: fullname + ' (@' + username + ') • not_so_Instagram',
            user: req.session.user,
            posts: posts
        });
    }
}

module.exports = indexController;