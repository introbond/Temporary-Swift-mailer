require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const nodemailer = require("nodemailer");

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.status(200).send('Hello from server')
})

module.exports = app;