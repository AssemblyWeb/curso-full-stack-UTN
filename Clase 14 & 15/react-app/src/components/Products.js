import React, { useState, useEffect } from 'react'

function Products() {

    const [data, setData] = useState([])
    // const [loading, setLoading] = useState([])

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products/1')
        .then(response => response.json())
        .then(response => {
            setData(response)
            console.log(response);
            // setLoading(false)
        })
        .catch(err => console.error(err))
    }, [])

    // useEffect(() =>{
    //     console.log(data);
    // }, [data])
    
    return (
        <>
         <h1>Producto a la venta</h1>   
        <h2>{ data.title }</h2>
        <h3>$ { data.price }</h3>
        <img src={ data.image } alt={ data.description } />
        </>
    )
}

export default Products
