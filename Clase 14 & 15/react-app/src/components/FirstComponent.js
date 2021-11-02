import React from 'react'

const FirstComponent = () => {

    const greeting = 'Hello there!'
    const name = 'Alfio'
    let colors = ['red', 'blue', 'green']

    return (
        <>
            {greeting} {name}
            <br></br>
            {colors[0]}        
    
        </>
    )
}
export default FirstComponent
