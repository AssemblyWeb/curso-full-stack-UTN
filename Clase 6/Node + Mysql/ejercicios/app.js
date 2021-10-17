const mysql = require('mysql2')
const http = require('http')

const connection = require('./connection')

// console.log(connection);

const mysqlConnection = mysql.createConnection(connection)


mysqlConnection.connect ( ( error ) => {

    if( error ) {

        console.warning('Connection not established')
        return

    }
    
    // console.log('connection established');

})


mysqlConnection.query ( 'SELECT first_name FROM MOCK_DATA', ( error, results ) => {
    
    if ( error ) console.log('connection query error') 
    
    console.log(results);
    const names = results.map( user => user.first_name )
    // console.log(names);

})
