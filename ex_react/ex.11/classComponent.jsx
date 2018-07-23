/**
 * React é o padrão, qualquer outra coisa entre chaves
 */
import React, { Component } from 'react'

export default class CLassComponent extends Component{
    constructor(props){
        /**
         * necessário por o super
         */
        super(props)
        /**
         * inicializa o estado do componente
         */
        this.state = { value: props.initialValue }
    }

    sum(delta){
        /**
         * Mais de um atributo
         * this.setState({ ...this.state, value: this.state.value + delta})
         * serve para alterar o estado
         */
        this.setState({ value: this.state.value + delta})
    }

    /**
     * é obrigatório ter pelo menos uma função que é a render
     */
    render(){
        /**
         * não pode alterar as váriaveis dentro do seu componente
         * this.props.value++
        */
        /**
         * Retorna seu template 
         */
        /**
         * Serve para ver o estado
         * <h2>{this.state.value}</h2>
         */
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)}>Decrementa</button>
                <button onClick={() => this.sum(1)}>Incrementa</button>
            </div>
        )
    }
}