const {
    User
} = require('../models');
const faker = require('faker');
faker.locale = 'en';

const databaseController = {
    index: async (req, res) => {
        let usersDatabase = await User.findAndCountAll();
        res.render('database', {
            title: 'Database not_so_Instagram',
            usersDatabase: usersDatabase.rows,
            totalUsers: usersDatabase.count,
            user: req.session.user
        });
    },
    show: async (req, res) => {
        let { id } = req.params;
        let user = await User.findOne({
            where:{
                id: id
            }
        })
        res.render('databaseUser', {
            title: 'Database not_so_Instagram',
            user: user
        })
    },
    create: async (req, res) => {
        const fakeData = faker.helpers.contextualCard();
        const fullname = fakeData.name;
        const email = fakeData.email.toLowerCase();
        const username = fakeData.username.toLowerCase();
        const password = faker.internet.password();

        await User.create({
            fullname: fullname,
            email: email,
            username: username,
            password: password
        })
        res.redirect('/database')
    },
    truncate: async (req, res) => {
        await User.destroy({
            truncate: true
        });
        await User.create({
            fullname: 'Administrator',
            email: 'admin@email.com',
            username: 'admin',
            password: 'admin'
        })
        res.redirect('/database')
    },
    destroy: async (req,res) => {
        let {id} = req.params;
        await User.destroy({
            where: {
              id: id
            }
          });
        res.redirect('/database')
    }
}

module.exports = databaseController;