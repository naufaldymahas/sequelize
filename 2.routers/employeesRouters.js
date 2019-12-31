const express = require('express')
const Router = express.Router()
const employee = require('../1.controllers/employeesControllers')
const verify = require('../4.helpers/verify')

Router.get('/employee', verify, employee.getAll)

Router.get('/employee/:id', employee.getReportsTo)

Router.post('/employee', employee.add)

Router.post('/employee/login', employee.login)

Router.get('/employee/office/:id', employee.getOffices)

Router.get('/employees', employee.paginatedEmployee)

module.exports = Router