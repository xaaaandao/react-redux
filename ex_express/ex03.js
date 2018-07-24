const express = require('express')
const server = express()

/**
 * quando tiver /api vai passar por esse middle
 */
server.use('/api', function(req, res, next){
    console.log('Inicio...')
    next()
    console.log('Fim')
})

server.use('/api', function(req, res){
    console.log('Resposta')
    res.send('<h1> express </h1>')
})

server.listen(3000, () => console.log('Executando...'))