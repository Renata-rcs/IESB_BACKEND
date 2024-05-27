const nodemailer = require('nodemailer');

// Configuração do transporte usando o serviço do Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Seu e-mail
        pass: process.env.EMAIL_PASS  // Sua senha de aplicativo
    }
});

// Função para enviar e-mail
function sendEmail(to, subject, text) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        text: text
    };

    return transporter.sendMail(mailOptions);
}

module.exports = {
    sendEmail
};

