import React from 'react'

export default props => (
    <div>
        <h1>Family</h1>
        {props.children}
        {React.cloneElement(props.children, props)}
        {React.cloneElement(props.children, {...props})}
    </div>
)

/**
 * Espalha o sobrenome para os filhos
 * {React.cloneElement(props.children, props)}
 * Também espalha pros filhos porém tem aque adicionar um módulo, não funciona para vários elementos
 * {React.cloneElement(props.children, {...props})}
 */