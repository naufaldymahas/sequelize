const express = require('express')
const Router = express.Router()
const train = require('../1.controllers/trainControllers')

Router.get('/', train.getAll)

Router.get('/:id', train.getById)

module.exports = Router