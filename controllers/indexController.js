const Sequelize = require('sequelize');
const config = require('../config/database');
const {
    User, Post, Follow
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
        let followers = await Follow.findAndCountAll({
            where: {
                id_followed: req.session.user.id
            },
            include:{
                model: User,
                as: 'user_follower',
                require:true
            }
        });
        let following = await Follow.findAndCountAll({
            where: {
                id_follower: req.session.user.id
            },
            include:{
                model: User,
                as: 'user_followed',
                require: true
            }
        })
        res.render('profile', {
            title: fullname + ' (@' + username + ') • not_so_Instagram',
            user: req.session.user,
            posts: posts,
            followers: followers,
            following: following,
            flw: 999
        });
    },
    show: async (req, res) => {
        let {username} = req.params;
        let user = await User.findOne({
            where: {
                username: username
            }
        })
        let posts = await Post.findAll({
            where: {
                id_user : user.id
            }
        });
        let followers = await Follow.findAndCountAll({
            where: {
                id_followed: user.id,
            },
            include:{
                model: User,
                as: 'user_follower',
                require: true
            }
        });
        let following = await Follow.findAndCountAll({
            where: {
                id_follower: user.id
            },
            include:{
                model: User,
                as: 'user_followed',
                require: true
            }
        })
        let flw;
        if (user.id == req.session.user.id){
            flw = 999; 
        } else {
            let f = await Follow.findOne({
                where:{
                    id_followed: user.id,
                    id_follower: req.session.user.id,
                }
            })
            if (f != 'undefined' && f != null){
                flw = 1;
            } else {
                flw = 0;
            }
        };
        res.render('profile', {
            title: user.fullname + ' (@' + username + ') • not_so_Instagram',
            user: user,
            posts: posts,
            followers: followers,
            following: following,
            flw : flw
        });
    }
}

module.exports = indexController;