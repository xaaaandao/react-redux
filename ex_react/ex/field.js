import React, {Component} from 'react'

class Field extends Component{
    /**
     * se 
     * this.state = { value: undefinded }
     * fica no estado não controlado
     */
    constructor(props){
        super(props)
        this.state = { value: props.initialValue }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        /**
         * this muda de contexto
         */
        this.setState({ value: event.target.value })
    }

    /**
     * Se remover onChange ele fica no estado controlado, logo não consigo digitar
     */
    render(){
        return (
            <div>
                <label>{this.state.value}</label><br/>
                <input onChange={this.handleChange} value={this.state.value}/>
            </div>
        )
    }
}

export default Field