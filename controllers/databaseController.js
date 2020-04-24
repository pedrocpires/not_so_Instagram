const databaseController = {
    databaseView: (req,res) =>{
        res.render('database', {title: 'Database not_so_Instagram'})
    }
}

module.exports = databaseController;