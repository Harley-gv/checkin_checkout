const express = require('express')

//import database
const { db } = require('./utils/database.util')

//import Routers
const { registrationRouter } =  require('./routes/registration.routes')
  
//init express 
const app = express()
app.use(express.json())

// Use Routers
const apiUrl = '/api/v1/registrations'

app.use(apiUrl, registrationRouter)

// pendiente organizar
db.authenticate()
.then(() => console.log('connect to database ok'))
.catch(err => console.log(err))

db.sync()
.then(() => console.log('db synced models'))
.catch(err => console.log(err))

// listen server
app.listen(4000, () => {
    console.log('express running!')
})

