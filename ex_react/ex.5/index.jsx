import React from 'react'
import ReactDOM from 'react-dom'
/**
 * Exporta sempre por padrão o que tá fora das chaves
 */
import {Primeiro, Segundo} from './component'

ReactDOM.render(
    /** Quando tem mais componentes tem que por div  */
    <div>
        <Primeiro/>
        <Segundo/>
    </div>
, document.getElementById('app'))