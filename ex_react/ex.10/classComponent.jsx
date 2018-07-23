/**
 * React é o padrão, qualquer outra coisa entre chaves
 */
import React, { Component } from 'react'

export default class CLassComponent extends Component{
    /**
     * é obrigatório ter pelo menos uma função que é a render
     */
    render(){
        /**
         * Retorna seu template 
         */
        return (
            <h1>{this.props.value}</h1>
        )
    }
}