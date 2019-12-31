const { Order, OrderDetail, Customer } = require('../3.models')
const moment = require('moment')
const { Op } = require('sequelize')
require('dotenv').config()

module.exports = {
    getAll: async (req, res) => {
        try {
            const data = await Order.findAll()
            res.send(data)
        } catch (error) {
            console.log(error)
        }
    },

    getWithCustomer: async (req, res) => {
        const { id } = req.params
        try {
            Customer.hasMany(Order, { foreignKey: 'customerNumber' })
            Order.belongsTo(Customer, { foreignKey: 'customerNumber' })
            const data = await Order.findAll({ where: { customerNumber: id }, include: [Customer] })
            // const data = await Customer.findByPk(id, {
            //     include: [Order]
            // })
            res.send(data)
        } catch (error) {
            console.log(error)
        }
    },

    getWithDetails: async (req, res) => {
        const { id } = req.params
        try {
            Order.hasMany(OrderDetail, { foreignKey: 'orderNumber' })
            OrderDetail.belongsTo(Order, { foreignKey: 'orderNumber' })
            const data = await Order.findByPk(id, { include: [OrderDetail] })
            res.send(data)
        } catch (error) {
            console.log(error)
        }
    }
}