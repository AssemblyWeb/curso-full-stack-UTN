const http = require('http')

const server = http.createServer( function( peticion, respuesta ) {

    respuesta.end( "Mi primer servidor con HTTP nativo" )

});

server.listen( 3000, function() { 

    console.log( "Mi servidor esta en el puerto 3000" )

})
