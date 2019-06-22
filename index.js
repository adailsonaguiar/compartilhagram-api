var express = require('express')

const app = express()

const usuarios = require('./routes/usuarios')

app.use(express.json())

app.listen(3000, () => {
    console.log('Ouvindo na porta 30000')
})

app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Rota POST')
})

/*
app.get('/:nome', (req, res) => {
    res.send(req.params.nome)
})
*/

app.use('/usuario', usuarios)