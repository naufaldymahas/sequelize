const { DataTypes } = require('sequelize')
const db = require('../database')

module.exports = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    is_verified: DataTypes.INTEGER,
    created_at: DataTypes.DATE
}, {
    timestamps: false
})