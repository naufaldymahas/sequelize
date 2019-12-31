const express = require('express');

const app = express();

const employees = require('./2.routers/employeesRouters')
const orders = require('./2.routers/ordersRouters')
const productLine = require('./2.routers/productLineRouters')

app.use(express.json());

app.use('/', employees)

app.use('/', orders)

app.use('/productline', productLine)


app.listen(8000, () => console.log('listening to port 8000'));