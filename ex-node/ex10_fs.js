const sf = require('fs')
/**
 * __dirname constantes dada por padrão
 */
const files = sf.readdirSync(__dirname)

files.forEach(f => console.log(f))