const { Product, ProductLine } = require('../3.models')
const moment = require('moment')
const { Op } = require('sequelize')
require('dotenv').config()

module.exports = {
    getAll: async (req, res) => {
        try {
            const data = await ProductLine.findAll()
            res.send(data)
        } catch (error) {
            console.log(error)
        }
    },

    getWithProduct: async (req, res) => {
        const { id } = req.params
        try {
            ProductLine.hasMany(Product, { foreignKey: 'productLine' })
            Product.belongsTo(ProductLine, { foreignKey: 'productLine' })
            const data = await ProductLine.findByPk(id, {
                include: [Product]
            })
            if (data) {
                res.send(data)
            } else {
                res.sendStatus(404)
            }
        } catch (error) {
            console.log(error)
        }
    }
}