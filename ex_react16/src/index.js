import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
//import { BoaTarde, BoaNoite } from './componentes/Multiplos';
import Multi from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

//não é html, é javascript 
//o trecho abaixo é jsx
const elemento = <h1>React 2</h1>

//o h1 é uma extensão
//qual nó da dom vai por (root)
//ReactDOM.render(elemento, document.getElementById('root'))
//Primeiro tem que ser maiusculo se o componente for personalizado
ReactDOM.render(
    //<div>
      //  <BoaTarde name="Xandão" idade={12}/>
       // <BoaNoite name="Xandão"/>
    //</div>
    /*<div>
        <Multi.BoaTarde name="Xands"/>
        <Multi.BoaNoite name="Xands"/>
    </div>*/
    //<Saudacao tipo="Bom dia" nome="joão"/>
    <Pai nome="dasa" sobrenome="silva">
        {/*Como passos os componentes filhos aqui??*/}
        <Filho nome="pedro" />
        <Filho nome="b" />
        <Filho nome="c" />
    </Pai>
, document.getElementById('root'))


//no jquery $('h1').html('React 2') que é similar ao que é gerado