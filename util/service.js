const axios = require('axios');
exports.getUser = (async (req, res) => {
    try {
        const response = await axios.get('https://script.google.com/macros/s/AKfycbzuE4HExzdaIyEqETAcenS9VVaQ1YIbxQjBzAo93lQeSf8ZbhTujHXNCUd1CQcMFp2-DQ/exec?action=readData');
        return response.data;
    } catch (error) {
        console.error(error);
        res.status(500).send('server internal error');
    };
});
exports.approve = (async (req, res) => {
    try {
        const response = await axios.post('https://script.google.com/macros/s/AKfycbzuE4HExzdaIyEqETAcenS9VVaQ1YIbxQjBzAo93lQeSf8ZbhTujHXNCUd1CQcMFp2-DQ/exec?action=approve');
        return response.data;
    } catch (error) {
        console.error(error);
        res.status(500).send('server internal error');
    };
});

const nodemailer = require("nodemailer");
exports.sentEmail = async () => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: "introbond.node@gmail.com",
        pass: process.env.NODE_MAILER_PASSWORD,
    }});
    
    let info = await transporter.sendMail({
        from: '"introbond.node@gmail.com',
        to: "introbond.dev@gmail.com",
        subject: "Backend interview: Puritat Chamart",
        text: `Dear Team
            As a coding interview, here is the result of testing no 4.
            Thanks for reading,
            James Bond`
    });
    
    transporter.sendMail(info, (error, success) => {
        if (error) {
            console.log(error)
            res.status(500).send(error)
        } else {
            console.log('success')
            res.status(201).send('sent email successfully')
        }
    })
}