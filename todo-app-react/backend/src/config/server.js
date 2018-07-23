/**
 * Porta
 */
const port = 3000

/**
 * 1- corpo da requisição se vier um formulário
 * 2- servidor express
 * 3- associa ao server
 */
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

/**
 * declaração relacionado ao middleware
 */
server.use(bodyParser.urlencoded({ extended:true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server