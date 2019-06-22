const mongoose = require('mongoose')

mongoose.connect('mongodb://heroku_xbfm0tpd:qct7crd5klqr15ev8tiodspmg9@ds241537.mlab.com:41537/heroku_xbfm0tpd', {
    useNewUrlParser: true
})

const usuario = mongoose.model('usuario', { nome: String, login: String, avatar: String })

module.exports = usuario