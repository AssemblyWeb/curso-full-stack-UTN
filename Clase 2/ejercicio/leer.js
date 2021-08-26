const fs = require('fs')

// les pasamos dos parametros
const data = fs.readFileSync( './archivo.txt', 'utf-8' )

console.log( data );