/**
 * Abrindo conexão para o mongo
 */
const mongoose = require('mongoose')

/**
 * Remover mensagem que api está depreciada
 */
mongoose.Promise = global.Promise

/**
 * conexão
 */
module.exports = mongoose.connect('mongodb://localhost/todo')