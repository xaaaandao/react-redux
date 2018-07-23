import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

ReactDOM.render(
    /**
     * String entre ' '
     * valores entre { }
     */
    <ClassComponent label='Contador' initialValue={10}/>
, document.getElementById('app'))