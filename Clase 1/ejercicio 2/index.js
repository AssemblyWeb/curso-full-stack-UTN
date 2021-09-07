// Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 y responda un mensaje de acuerdo a la hora actual:
// -Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
// -Entre las 13 y las 19 hs será 'Buenas tardes!'.
// -De 20 a 5 hs será 'Buenas noches!’.

// Se mostrará por consola cuando el servidor esté listo para operar y en que puerto lo está haciendo. Pasen su Servidor por el chat.

const http = require( 'http' )
const PORT = 8080

const server = http.createServer( ( request, response ) => {
    
    response.end( `Mi servidor está en el puerto ${PORT}` )
    
})

server.listen( PORT, () =>  { 
    
    getGreeting()
    
})

const getGreeting = () => {
    
    const actualTime = new Date().getHours()
    
    if ( actualTime >= 6 && actualTime <= 12 ) {

        console.log( 'Buenos días!' )

    } else if ( actualTime >= 13 && actualTime <= 19 ) {

        console.log( 'Buenas tardes!' )

    } else {

        console.log( 'Buenas noches!' )

    }

}

