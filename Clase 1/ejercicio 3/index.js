// Desarrollar un servidor en node.js que con cada requerimiento devuelva como resultado un objeto con las siguientes características:
// {
//     id: (número aleatorio entre 1 y 10),
//     title: "Producto "+ (número aleatorio entre 1 y 10),
//     price: (número aleatorio entre 0.00 y 9999.99),
//     thumbnail: "Foto "+ (número aleatorio entre 1 y 10)
// }

const http = require('http')
const server = http.createServer();

server.listen( 3000, () => { 

    console.log( obj )
    
})

const randomNum = ( min, max, decimals ) => {

   return ( Math.random() * ( max - min ) + min ).toFixed( decimals )

}

const obj = {
    id: randomNum( 1, 10, 0 ),
    title: "Producto " + randomNum( 1, 10, 0 ),
    price: randomNum( 9999.0, 9999.99, 2 ),
    thumbnail: "Foto " + randomNum( 1, 10, 0 )
}

