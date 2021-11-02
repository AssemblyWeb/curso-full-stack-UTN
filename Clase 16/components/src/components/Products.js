import React, { useState } from 'react'
import AddProduct from './AddProduct'
import ProductList from './ProductList'

function Products() {

    const [ products, setProducts ] = useState([
        'Gaseosa', 'Cerveza', 'Agua', 'Soda'
    ])

    return (
        <div>
            <h1>Products</h1>   
            <AddProduct setProducts={ setProducts }/>
            <ProductList products={ products }/>
        </div>
    )
}

export default Products
