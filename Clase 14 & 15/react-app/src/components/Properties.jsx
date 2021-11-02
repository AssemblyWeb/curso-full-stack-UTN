import React from 'react'
import PropTypes from 'prop-types'

export default function Properties ( {saludo, numero, direccion="Corrientes", barrio} ) {
    // console.log(numero);
    if (!saludo){
        throw new Error ('No se ha definido el saludo')
    }
    return (
        <>
         <h1>Imprimiendo las propiedades del componente</h1>   
         <h2>Hola {saludo}, la calle es {direccion} y tu numero es {numero + 50} en el barrio de {barrio}</h2>
        </>
    )
}
PropTypes.proptypes  = {
    saludo: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    direccion: PropTypes.string,
    barrio: PropTypes.string,
}
Properties.defaultProps = {
    barrio: "San Cristobal"
}