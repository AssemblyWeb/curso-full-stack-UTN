import React from 'react'

function ProductList( { products } ) {
    return (
        <ol>
            {products.map( ( product, index ) => {
                    return <li key={ index } >{ product }</li>
                }
            )}
        </ol>
    )
}

export default ProductList
