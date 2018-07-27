import React, {Fragment} from 'react'

export default props => [
    //Quando usar colchetes tem que por key (tem que ser valores diferentes)
    <h1 key='h1'>Bom dia {props.nome} e {props.idade}</h1>,
    <h2 key='h2'> até breve </h2>
]

//Ao invés de div, para não quebrar o layout React.Fragment ou Fragment
//(mas tem que importar Fragment)
//<div>
//<React.Fragment>
//<Fragment>
//</Fragment>
//</React.Fragment>
//</div>