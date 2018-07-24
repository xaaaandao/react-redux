/**
 * npm i lodash
 */
const _ = require('lodash')

const alunos = [
    {
        nome: 'João',
        nota: 7.6
    }, {
        nome: 'Maria',
        nota: 8.6
    }, {
        nome: 'Pedro',
        nota: 8.1
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)

/**
 * cria o arquivo package.json
 * npm init -y
 * 
 * adiciona lodash no package
 * npm i lodash --save
 */