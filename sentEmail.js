const nodemailer = require("nodemailer");
const sentEmail = async () => {
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
        } else {
            console.log('success')
        }
    })
}

module.exports = sentEmail();