const express = require('express')
const mysql = require('mysql2')
const app = express()

const mysqlConfig = require('./connection')

const connection = mysql.createConnection(mysqlConfig)
console.log(connection.config.port);

connection.connect( ( error ) => {
    if ( error ) {
        console.error(  'Oops! ' + error );
        process.exit()
    }
    console.log('connection established');
})

// Esto es para habilitar el request.body
app.use(express.json())

app.get( '/api/health', ( request, response ) => {

})