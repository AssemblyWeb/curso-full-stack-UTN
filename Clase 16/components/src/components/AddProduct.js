import React,{ useState } from 'react'

function AddProduct( { setProducts } ) {
    
    const [input, setInput] = useState('Introduzca un nuevo producto')

    const handleValueChange = event => {
        let text = event.target.value
        setInput(text)
    }
    
    const handleSubmitValue = event => {
        event.preventDefault()
        if(input.trim().length >= 1){
            setProducts(products => [...products, input])
            setInput("")
        }
    }

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmitValue} className="input-group mb-3 mx-auto w-50">
                <input value={input} onChange={handleValueChange} type="text" className="form-control" />
                <button className="btn btn-primary" type="submit" >Go</button>
            </form>
        </div>
    )
}

export default AddProduct
