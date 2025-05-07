const express = require('express')
const cors = require('cors')

// Conexão com o banco de dados
require('./db/conn')

const app = express()

// Config Json response

app.use(express.json())

//Solve CORS

app.use(cors ({ credentials: true, origin: 'http://localhost:3000' }))

// Public folder for images
app.use(express.static('public'))

//Routes
const UserRoutes = require('./routes/UserRoutes')
app.use('/users', UserRoutes)

app.listen(5000)