const normalizePort = port => parseInt(port, 10);
const port = normalizePort(process.env.PORT || 8888);
const express = require('express');
const path = require('path');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
const morgan = require ('morgan');
const compression =require ('compression');
const app = express();
const dev = app.get('env') !== 'production';
const helmet = require('helmet');

if (!dev) {
    app.use(compression());
    app.use(helmet.hidePoweredBy({ setTo: 'AmYou: selfmade with lots of Coffee ^^' }));
    app.use(morgan('common'));
    app.use(helmet.xssFilter());
    app.use(helmet.noSniff());
    app.use(helmet.frameguard('deny'));
    app.use(helmet.featurePolicy({
        features: {
            fullscreen: ["'self'"],
            vibrate: ["'none'"],
            syncXhr: ["'none'"]
        }
    }));
    app.use(helmet.hsts({
        maxAge: 7776000000,
        includeSubdomains: true
    }));
}
if (dev) {
    app.use(morgan('dev'));
}
app.use('/', express.static(path.join(__dirname, '/client/build/')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/api/sendEmail', function (req, res) {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const subject = req.body.subject;
    const email = req.body.email;
    const message = req.body.message;

    const content = `firstName: ${firstName} \n lastName: ${lastName} \n email: ${email} \n subject: ${subject} \n message: ${message} `;

    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GUSER ,
            pass: process.env.GPASS
        }
    });

    const mailOptions = {
        from: email,
        to: 'amine.youssfi10@gmail.com',
        subject: 'New Message from Contact Form',
        text: content
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.status(404).json({message: "message not sent: an Error occured; check the server's console log"});
            transporter.close();
        } else {
            res.status(200).json({message: `message sent: ${info.messageId}`});
            transporter.close();
        }
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    res.flush();
});

app.listen(port, function(){
    console.log('Server is running at PORT:',port)
});
