const Sequelize = require('sequelize');
const config = require('../config/database');
const {
    User
} = require('../models');
const faker = require('faker');
faker.locale = 'en';

const conection = new Sequelize(config);

const signupController = {
    index: (req, res) => {
        res.render('signup', {
            title: 'not_so_Instagram'
        });
    },
    create: async (req, res) => {
        let {
            email,
            fullname,
            username,
            password
        } = req.body;
        User.create({
            fullname: fullname,
            email: email,
            username: username,
            password: password,
            createdAt: Sequelize.DATE
        })

        res.render('login', {
            title: 'not_so_Instagram',
            msg: 'Account created successfully. Please login to start.'
        });
    },
    fakerCreate: async (req, res) => {
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
        res.redirect('/signup');
    }
}

module.exports = signupController;