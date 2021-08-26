const fs = require('fs')

fs.mkdir( './creoUnaCarpeta', error => {
    if( error ) {
        console.log( error );
    } else {
        console.log( 'La carpeta ha sido creada' );
    }
})