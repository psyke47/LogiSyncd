document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon i');
  const navList = document.querySelector('.nav-list');

  menuIcon.addEventListener('click', function() {
    if (navList.style.display === 'flex') {
      navList.style.display = 'none';
    } else {
      navList.style.display = 'flex';
    }
  });
});

/*
require('dotenv').config();
const nodemailer = require('nodemailer');

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_HOST) {
    console.log('Email credentials are missing. Please fill out the .env file.');
    process.exit(1); // Exit the process if credentials are missing
}

// Create transporter with email configuration from environment variables
let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT || 587,
    secure: false, // use SSL for port 465
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Send email function (won't be triggered until credentials are provided)
async function sendEmail(to, subject, text) {
    let info = await transporter.sendMail({
        from: `"LogiSyncd" <${process.env.EMAIL_USER}>`,
        to: to,
        subject: subject,
        text: text
    });
    console.log('Message sent: %s', info.messageId);
}

// Uncomment this to send a test email once credentials are available:
// sendEmail('recipient@example.com', 'Demo Email from LogiSyncd', 'This is a test email from LogiSyncd.');

*/
