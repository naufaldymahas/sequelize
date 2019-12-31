const { DataTypes } = require('sequelize');
const db = require('../database')

const Product = db.define('products', {
    productCode: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    productName: DataTypes.STRING,
    productLine: DataTypes.STRING
}, {
    timestamps: false
})

const ProductLine = db.define('productlines', {
    productLine: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    textDescription: DataTypes.STRING,
    htmlDescription: DataTypes.STRING,
    image: DataTypes.BLOB
}, {
    timestamps: false
})

const Customer = db.define('customers', {
    customerNumber: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    addressLine1: DataTypes.STRING
}, {
    timestamps: false
})

const Employee = db.define('employees', {
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

const Office = db.define('offices', {
    officeCode: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    addressLine1: DataTypes.STRING,
    addressLine2: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    territory: DataTypes.STRING
}, {
    timestamps: false
})

const Order = db.define('orders', {
    orderNumber: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    orderDate: DataTypes.DATE,
    requiredDate: DataTypes.DATE,
    shippedDate: DataTypes.DATE,
    status: DataTypes.STRING,
    comments: DataTypes.STRING,
    customerNumber: DataTypes.INTEGER
}, {
    timestamps: false
})

const OrderDetail = db.define('orderdetails', {
    orderNumber: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    productCode: DataTypes.STRING,
    quantityOrdered: DataTypes.INTEGER,
    priceEach: DataTypes.DECIMAL,
    orderLineNumber: DataTypes.SMALLINT
}, {
    timestamps: false
})

module.exports = {
    Product,
    ProductLine,
    Customer,
    Employee,
    Office,
    Order,
    OrderDetail
}