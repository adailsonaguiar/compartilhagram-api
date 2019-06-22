var express = require('express')
var router = express.Router()
var usuarioModel = require('../models/usuario')

router.get('/', (req, res) => {
    usuarioModel.find((erro, usuarios) => {
        res.send(usuarios)
    })
})

router.post('/cadastrar', (req, res) => {
    var dados = req.body
    var novoUsuario = new usuarioModel({ nome: dados.nome, login: dados.login })

    novoUsuario.save()
    res.send({ mensagem: 'Novo usário salvo', usuario: novoUsuario })
})

module.exports = router