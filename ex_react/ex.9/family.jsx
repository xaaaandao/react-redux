import React from 'react'
import {childrenWithProps} from '../utils/reactUtils'

export default props => (
    <div>
        <h1>Family</h1>
        { childrenWithProps(props.children, props) }
    </div>
)

/**
 * Para referenciar algo do java script colocar entre { }
 */

/**
 * Espalha o sobrenome para os filhos
 * {React.cloneElement(props.children, props)}
 * Também espalha pros filhos porém tem aque adicionar um módulo, não funciona para vários elementos
 * {React.cloneElement(props.children, {...props})}
 * Solução: {React.Children.map(props.children, 
                child => React.cloneElement(child, {...props})
            )}
 */