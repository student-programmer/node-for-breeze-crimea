const express = require("express");
const app = express();
const nodemailer = require("nodemailer")
const cors = require("cors")
 
const port = 5000

app.use(cors())
app.use(express.json())
app.post('/form', async (req, res) => {

    const {email, phone, name} = req.body 
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
                subject: "Письмо",
                html: `"Имя пользователя"${name}, его почта и номер телефона ${email}, ${phone}`,
                
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
 



