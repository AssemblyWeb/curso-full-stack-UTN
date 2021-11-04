import React, { useState, useEffect } from 'react'
import Card from './Card'


const Coleccion = ( { products } ) => {

    const [datos, setDatos] = useState([])

    useEffect(() => {
        const request = async () => {
            const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(products)}&limit=10&api_key=XfTrLeRLQnMp091kQoOLQXHzHrMs0Cb2`
    
            const response = await fetch(url)
            const { data } = await response.json()
    
            const images = data.map( image => {
                return {
                    id: image.id,
                    title: image.title,
                    url: image.images?.downsized_medium.url
                }
            })
            setDatos(images)

        }
        request()
    }, [ products ])

    return (
        <div className="container">
            <div className="row">
                {datos.map( ( { id, title, url }, index ) => {
                    return <Card key={ id } id={ id } title={ title } url={ url } />
                })}
            </div>
        </div>
    )
}

export default Coleccion
