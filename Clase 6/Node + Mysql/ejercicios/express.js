const express = require('express')
const mysql = require('mysql2')

const app = express()
const mysqlConfig = require('./connection')

let gente = ['Berni', 'Nico', 'Dani', 'Vicki']

const connection = mysql.createConnection(mysqlConfig)

connection.connect( ( error ) => {
    if  ( error ) {
        console.error( error )
        return
    }
    console.log( 'conection established' )
})

app.use(express.json())

//  GET POST PUT
app.get( '/', ( req, res ) => {
    
    const filtroNombre = req.query.first_name
    
    console.log(filtroNombre)

    res.json(filtroNombre)
    console.log('hola');

})

