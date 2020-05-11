function auth(req, res, next) {
    if (req.session.user != undefined) {
        if (req.path == '/'){
            console.log('Passou aqui')
            next()
        } else {
            return res.redirect('/')
        }
    } else {
        return res.redirect('/login')
    }
}

module.exports = auth;