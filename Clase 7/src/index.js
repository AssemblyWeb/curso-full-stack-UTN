const { PORT } = require('./global')
const { getConnection } = require('./connection')
const app = require('./server')


getConnection().then( () => {

    app.listen( PORT, () => {

        console.log(`Listen on port ${PORT}`);

    })

}).catch( error => {

    console.error( error )

})

