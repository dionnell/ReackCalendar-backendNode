const express = require('express');
require('dotenv').config();
const cors = require('cors')
const { dbConnection } = require('./database/config')

//crear servidor de express
const app = express()

//Base de datos
dbConnection()

// CORS
app.use(cors())

//directorio publico
app.use( express.static('public') )

//Lectura y parses del body
app.use( express.json() )

//rutas
app.use('/api/auth', require('./routes/auth'))
// TODO: CRUD: Eventos
app.use('/api/events', require('./routes/events'))



//escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor en puerto ${process.env.PORT}`)
} )
