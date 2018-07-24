const express = require('express')
const server = express()

/**
 * Mapeamento
 * São três funções middle
 * req -> requisicao
 * res -> resposta
 */
server.get('/', function(req, res){
    res.send('<h1>Index</h1>')
})

server.all('/teste', function(req, res){
    res.send('<h1>Teste</h1>')
})

/**
 * expressão regular em que tem que pegar palavras com api 
 */
server.get(/api/, function(req, res){
    res.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('Executando...'))