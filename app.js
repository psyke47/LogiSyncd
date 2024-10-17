require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}))

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT || 587, //get port number
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

aapp.post('/send-demo', (req, res) => {
    const { name, email, company, message } = req.body;

    const mailOptions = {
        from: `"LogiSyncd Demo Request" <${process.env.EMAIL_USER}>`, 
        to: process.env.EMAIL_USER, 
        subject: 'New Demo Request',
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Something went wrong.');
        }
        console.log('Demo request email sent: ' + info.response);
        res.send('Demo request sent successfully!');
    });
});

app.post('/send-contact', (req, res) => {
    const {name, email, message} = req.body;

    const mailOptions = {
        from: '"LogiSyncd Contact Request" <${process.env.EMAIL_USER}>',
        to: process.env.EMAIL_USER, 
        subject: 'New Contact Message',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Something went wrong.');
        }
        console.log('Contact request email sent: ' + info.response);
        res.send('Contact message sent successfully!');
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});
