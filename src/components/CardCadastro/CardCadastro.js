import React from 'react'
import './CardCadastro.scss';

const CardCadastro = (props) => {
    return (
        <div>
            <div className=''>{props.titulo}</div>
            <div><img src={props.imagem} alt={props.titulo} className="w-full" /></div>
    </div>
    )
}

export default CardCadastro
