/**
 * resultado do export no todo.js
 */
const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])

/**
 * mandar atualizar eu pego o valor atualizado
 */
Todo.updateOptions({new:true, runValidators:true})

module.exports = Todo