const jwt = require('jsonwebtoken')
const User = require('../3.models/users')
require('dotenv').config()

module.exports = async (req, res, next) => {
    if (req.headers.authorization) {
        const decoded = jwt.verify(req.headers.authorization, process.env.KEY)
        const validation = await User.findOne({ where: { email: decoded } })
        if (validation) return next()
    }
    res.status(401).send(null)
}