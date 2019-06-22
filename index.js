var express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Rota POST')
})

app.listen(3000, () => {
    console.log('Ouvindo na porta 30000')
})

