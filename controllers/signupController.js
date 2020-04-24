const Signup = require('../models/Signup')

const signupController = {
    createAccountForm: (req, res) => {
        res.render('signup', {
            title: 'not_so_Instagram'
        });
    },
    createAccount: (req, res) => {
        let {
            email,
            fullname,
            username,
            password
        } = req.body;
        Signup.createAccount(email, fullname, username, password);
        res.render('login',{
            title: 'not_so_Instagram',
            msg: 'Account created successfully. Please login to start.'
        });
    }
}

module.exports = signupController;