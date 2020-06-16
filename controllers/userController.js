const Sequelize = require('sequelize');
const config = require('../config/database');
const {User, Post} = require('../models');

const conection = new Sequelize(config);

const userController = {
    index: (req, res) => {
        let {id} = req.params;

        // let user = await User.findOne({
        //     where: {
        //         username: username
        //     }
        // })
        // let posts = await Post.findAll({
        //     where: {
        //         id : user.id
        //     }
        // });
        // res.render('profile', {
        //     title: fullname + ' (@' + username + ') • not_so_Instagram',
        //     user: user,
        //     posts: posts
        // });
    }
};

module.exports = userController;