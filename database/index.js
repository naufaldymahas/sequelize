const Sequelize = require('sequelize')
require('dotenv').config()

const db = new Sequelize(
    process.env.DB_SCHEMAS, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        dialect: 'mysql',
        host: 'localhost'
    }
)

module.exports = db