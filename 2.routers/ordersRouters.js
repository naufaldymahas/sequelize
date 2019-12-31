const express = require('express')
const Router = express.Router()
const order = require('../1.controllers/ordersControllers')
const verify = require('../4.helpers/verify')

Router.get('/orders', order.getAll)

Router.get('/orders/:id', order.getWithCustomer)

Router.get('/orders/detail/:id', order.getWithDetails)


module.exports = Router