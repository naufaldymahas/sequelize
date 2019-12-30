const jwt = require('jsonwebtoken')
// const User = require('../3.models/employee')
require('dotenv').config()

module.exports = (req, res, next) => {

    const { authorization } = req.headers
    if (authorization) {
        const decoded = jwt.verify(authorization, process.env.KEY)
        if (decoded.jobTitle === 'President') return next()
    }
    res.status(401).send('Access Denied!')
}