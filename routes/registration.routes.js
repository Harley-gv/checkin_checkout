const express = require('express')

//import controllers
const { getAllRegistrations, getRegistrations, createRegistrations, updateRegistrations, cancelRegistrations } = require('../controllers/registration.controller')

const registrationRouter = express.Router()

registrationRouter.get('/', getAllRegistrations)

registrationRouter.get('/:id', getRegistrations)

registrationRouter.post('/', createRegistrations)

registrationRouter.patch('/:id', updateRegistrations)

registrationRouter.delete('/:id', cancelRegistrations)

module.exports = { registrationRouter }