const { Employee } = require('../3.models')
const moment = require('moment')
const { Op } = require('sequelize')
// const crypto = require('crypto')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
    getAll: async (req, res) => {
        try {
            const data = await Employee.findAll()
            res.send(data)
        } catch (error) {
            console.log(error)
        }
    },

    add: async (req, res) => {
        try {
            const { full_name, email, is_verified } = req.body
            const created_at = moment().format('YYYY-MM-DD HH:mm:ss')
            // const password = crypto.createHmac('sha256', process.env.KEY).update(req.body.password).digest('base64')
            const validation = await Employee.findOne({ where: { email } })
            if (validation) return res.status(406).send('Email already exist!')
            const data = await Employee.create({
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
            // const password = crypto.createHmac('sha256', process.env.KEY).update(req.body.password).digest('base64')
            const data = await Employee.findOne({ where: { email } })
            if (!data) return res.status(401).send('Wrong email!')
            const token = jwt.sign(data.dataValues, process.env.KEY)
            res.send(token)
        } catch (error) {
            res.status(400).send(error)
            console.log(error)
        }
    },

    getReportsTo: async (req, res) => {
        try {
            const employeeNumber = parseInt(req.params.id)
            // const data = await Employee.findAll({
            //     where : {
            //         [Op.or]: [
            //             { employeeNumber },
            //             { reportsTo: employeeNumber }
            //         ]
            //     }
            // })
            Employee.hasMany(Employee, { as: 'needReportsTo', foreignKey: 'reportsTo' })
            // Employee.belongsTo(Employee, { foreignKey: 'reportsTo' })
            const data = await Employee.findByPk(employeeNumber, {
                attributes: ['employeeNumber', 'lastName', 'firstName'],
                include: [{
                    model: Employee,
                    as: 'needReportsTo'
                }]
            })
            if (data.length !== 0) {
                res.send(data)
            } else {
                res.sendStatus(404)
            }
        } catch (error) {
            console.log(error)
        }
    },
    
    getOffices: async (req, res) => {
        const { id } = req.params
        try {
            Office.hasMany(Employee, { foreignKey: 'officeCode' })
            Employee.belongsTo(Office, { foreignKey: 'officeCode' })
            const data = await Office.findByPk(id, {
                include: [Employee]
            })
            res.send(data)
        } catch (error) {
            console.log(error)
        }
    },

    paginatedEmployee: async (req, res) => {
        const limit = parseInt(req.query.limit)
        let page = parseInt(req.query.page)
        if (page == 1) {
            page = 0
        }
        try {
            const data = await Employee.findAll({ limit, offset: page })
            res.send(data)
        } catch (error) {
            console.log(error)
        }
    }
}