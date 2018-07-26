//import Pessoa from './pessoa'
import './modulos/moduloA'
//Injeta via dom o css
import './assets'
//const MiniCssExtractPlugin =  require('mini-css-extract-plugin')
const Pessoa = require('./pessoa')

const atendente = new Pessoa
console.log(atendente.cumprimentar())