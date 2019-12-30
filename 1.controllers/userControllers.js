const User = require('../3.models/users')
const moment = require('moment')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
    getAll: async (req, res) => {
        try {
            const data = await User.findAll()
            res.send(data)
        } catch (error) {
            console.log(error)
        }
    },

    addUser: async (req, res) => {
        try {
            const { full_name, email, is_verified } = req.body
            const created_at = moment().format('YYYY-MM-DD HH:mm:ss')
            const password = crypto.createHmac('sha256', process.env.KEY).update(req.body.password).digest('base64')
            const validation = await User.findOne({ where: { email } })
            if (validation) return res.status(406).send('Email already exist!')
            const data = await User.create({
                full_name,
                email,
                password,
                is_verified,
                created_at
            })
            res.status(201).send(data)
        } catch (error) {
            res.status(400).send(error)
            console.log(error)
        }
    },

    login: async (req, res) => {
        try {
            const { email } = req.body
            const password = crypto.createHmac('sha256', process.env.KEY).update(req.body.password).digest('base64')
            const user = await User.findOne({ where: { email, password } })
            if (!user) return res.status(401).send('Wrong email or password!')
            const token = jwt.sign(email, process.env.KEY)
            res.send(token)
        } catch (error) {
            res.status(400).send(error)
            console.log(error)
        }
    }
}