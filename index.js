const express = require('express');
const bodyParser = require ('body-parser');
const nodemailer = require ('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li> name: ${req.body.nameValue} </li>
            <li> email: ${req.body.emailValue} </li>
        </ul>
        <p>${req.body.messageValue}</p>`;
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'annamarie.hamill97@ethereal.email',
                pass: '4A8reRYswwCxUBumdR'
            }
        });
        const mailoptions ={
            from: req.body.emailValue,
            to: 'annamarie.hamill97@ethereal.email',
            replyTo: req.body.emailValue,
            subject: 'from website',
            text: req.body.messageValue ,
            html: htmlEmail
        }
        transporter.sendMail(mailoptions, (err, info)=> {
            if(err){
                return console.log(err);
            }
            console.log('message sent');
        })
    })
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=> {
    console.log(`server listen on port ${PORT}`)
})