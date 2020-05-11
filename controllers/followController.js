const Sequelize = require('sequelize');
const config = require('../config/database');
const {
    User, Post, Follow
} = require('../models');

const followController = {
    store: async (req, res) => {
        let {id_followed} = req.body;
        await Follow.create({
            id_followed: id_followed,
            id_follower: req.session.user.id
        })
        res.redirect(req.headers.referer)
    },
    destroy: async (req, res) => {
        let {id_followed} = req.body;
        await Follow.destroy({
            where:{
                id_followed: id_followed,
                id_follower: req.session.user.id,
            }
        })
        res.redirect(req.headers.referer)
    }
}


module.exports = followController;
