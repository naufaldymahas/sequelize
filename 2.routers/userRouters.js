const express = require('express')
const Router = express.Router()
const user = require('../1.controllers/userControllers')
const verify = require('../4.helpers/verify')

Router.get('/user', verify, user.getAll)

Router.post('/user', user.addUser)

Router.post('/user/login', user.login)

module.exports = Router