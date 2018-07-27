import React from 'react'
//import Filho from './Filho'
import {childrenWithProps} from '../utils/utils'

export default props =>
    <div>
        <h1> {props.nome} {props.sobrenome} </h1>
        <h2> Filhos</h2>
        <ul>
            {/**props.children*/}
            {/* só funciona para um elemento */}
            {/**React.cloneElement(props.children, {...props, ...props.children.props})**/}
            {/*
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {...props, ...child.props})
                })*/
            }
            {childrenWithProps(props)}
            {/**<Filho nome="pedro" sobrenome={props.sobrenome}/>
            <Filho {...props} />
            <Filho {...props} nome="joão"/>*/}
        </ul>
    </div>