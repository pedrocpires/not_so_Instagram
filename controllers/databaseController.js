const {
    User
} = require('../models');
// const User = require('../models/User');

const databaseController = {
    databaseView: async (req, res) => {
        let usuariosSelect = await User.findAll();
        console.log(usuariosSelect);
        res.render('database', {
            title: 'Database not_so_Instagram',
            lista: usuariosSelect
        });
    }
}

module.exports = databaseController;