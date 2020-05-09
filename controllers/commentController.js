const Sequelize = require('sequelize');
const config = require('../config/database');
const path = require('path')
const {
    User, Post, Comment
} = require('../models');

const commentControlle = {
    store: async (req, res) => {
        let {id_post, id_user, comment} = req.body;
        await Comment.create({
            comment: comment,
            likes: 0,
            id_user: id_user,
            id_post: id_post
        })
        res.redirect('/post/' + id_post)
    }
}

module.exports = commentControlle;