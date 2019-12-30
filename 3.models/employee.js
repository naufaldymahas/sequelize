const { DataTypes } = require('sequelize')
const db = require('../database')

module.exports = db.define('employees', {
    employeeNumber: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    email: DataTypes.STRING,
    reportsTo: DataTypes.INTEGER,
    jobTitle: DataTypes.DATE
}, {
    timestamps: false
})