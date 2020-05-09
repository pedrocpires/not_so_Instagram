const Sequelize = require('sequelize');
const config = require('../config/database');
const path = require('path')
const {
    User, Post, Comment
} = require('../models');

const conection = new Sequelize(config);

const postController = {
    index: async (req, res) => {
        let {id} = req.params;
        let post = await Post.findOne({
            where: {
                id: id
            },
            include: [{
                model: User,
                as: 'user',
                require: true
            },{
                model: Comment,
                as: 'comment',
                require: true,
                include: {
                    model: User,
                    as: 'user',
                    require: true
                }
            }
        ]
        })
        res.render('post', {
            title: 'Post by: ' + req.session.user.username + ' • not_so_Instagram',
            user: req.session.user,
            post: post,
            
        });
    },
    create: (req, res) => {
        res.render('newpost', {
            title: 'New Post • not_so_Instagram',
            user: req.session.user
        })
    },
    store: async (req, res, next) => {
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

module.exports = postController;
