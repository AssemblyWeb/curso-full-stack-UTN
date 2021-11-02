import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Counter( { valor } ) {

  const [valorInit, setValor] = useState( valor )
  
  const handleIncrement = () => {
    setValor(valorInit + 1)
  }
  const handleDecrement = () => {
    setValor(valorInit - 1)
  }
  
    return (
        <>
            <h1>Contador</h1>
            <h2>{valorInit}</h2>
            <button onClick={ handleIncrement } className="btn btn-primary">+1</button>
            <button onClick={ handleDecrement } className="btn btn-danger">-1</button>
        </>
    )
}
PropTypes.proptypes  = {
    valor: PropTypes.number.isRequired
}