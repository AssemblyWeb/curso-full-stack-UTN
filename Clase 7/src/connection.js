const mongoose = require('mongoose')

const { MONGO_URI } = require('./global')

exports.getConnection = async () => {

    try{
        await mongoose.connect( MONGO_URI, { 
            
            useNewUrlParser: true, 
            useUnifiedTopology: true

        })
        console.log('exitosamente');
        
    } catch ( error ) {

        console.log( error )

    }
}