require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const nodemailer = require("nodemailer");
const service = require('./util/service');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.status(200).render('index');
})

app.post("/login", async (req, res) => {
    const {id, password} = req.body;
    const users = await service.getUser();
    const existingUser = users.find(user => user.id === id);
    if (!existingUser) {
        res.status(400).send('no user in database');
    };
    if (existingUser.password !== password) {
        res.status(400).send('incorrect password');
    };
    res.status(200).json({
        success: true,
        user: existingUser
    });
});

module.exports = app;