const { DataTypes } = require('sequelize');
const db = require('../database')

module.exports = db.define('trains', {
    PassengerId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Survived: DataTypes.INTEGER,
    Pclass: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Sex: DataTypes.STRING
}, {
    timestamps: false
})