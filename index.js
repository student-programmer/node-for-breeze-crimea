const express = require("express");
const app = express();
const nodemailer = require("nodemailer")
const cors = require("cors")
const config = require('config');
const port = config.get('Parametrs.port');
const password = config.get('Parametrs.password');
const gmail = config.get('Parametrs.gmail');

app.use(cors())
app.use(express.json())
app.post('/form', async (req, res) => {
    
    const {email, phone, name, description} = req.body 
    console.log(email)
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user:"godjs16179@gmail.com",
                pass:"161789923Tt",
            },
        });
        try {
            await transporter.sendMail({
                from: 'godjs16179@gmail.com',
                to: "gamergo16179@gmail.com",
                subject: "Заказ кондиционера с сайта",
                html: `Имя пользоателя: ${name}, его почта: ${email} и номер телефона: ${phone}, - описание работы: ${description}`,
                
            },);
            return res.json({ status: true, response: {msg: 'Сообщение успешно отправлено!' } });
        }
        catch (e) {
            return console.log(e);
        }
    
    } catch (e) {
        return console.log(e);
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
 



