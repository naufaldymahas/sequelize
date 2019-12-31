const express = require('express')
const Router = express.Router()
const productLine = require('../1.controllers/productLineControllers')
const verify = require('../4.helpers/verify')

Router.get('/', productLine.getAll)

Router.get('/:id', productLine.getWithProduct)

module.exports = Router