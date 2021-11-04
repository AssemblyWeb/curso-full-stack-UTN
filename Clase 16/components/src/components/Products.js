import React, { useState } from 'react'
import AddProduct from './AddProduct'
// import ProductList from './ProductList'
import Coleccion from './Coleccion'


function Products() {

    const [ products, setProducts ] = useState('')
    // const [ products, setProducts ] = useState([
        // 'Gaseosa', 'Cerveza', 'Agua', 'Soda'
    // ])
    return (
        <div>
            <h1>Products</h1>   
            <AddProduct setProducts={ setProducts }/>
            {/* <ProductList products={ products }/> */}
            <Coleccion products={ products }/>
        </div>
    )
}

export default Products
