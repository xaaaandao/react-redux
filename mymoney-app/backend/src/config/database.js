const mongoose = require('mongoose')
/**
 * evita warnings
 */
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "o atributo {PATH} é obrigatório."
mongoose.Error.messages.Number.min = "o valor '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "o valor '{VALUE}' informado é maior que o limite maior de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."