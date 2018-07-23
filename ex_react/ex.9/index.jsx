import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family  lastName ='Kajihara'>
        <Member name='Alexandre'/>
        <Member name='Augusto'/>
    </Family>
, document.getElementById('app'))