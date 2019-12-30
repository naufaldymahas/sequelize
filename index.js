const express = require('express');

const app = express();

const employees = require('./2.routers/employeesRouters')

app.use(express.json());

app.use('/', employees)

app.listen(8000, () => console.log('listening to port 8000'));