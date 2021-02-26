const nodemailer = require('nodemailer');

class NodemailerController{
    async send(req, res){

        const { mail, subject, html } = req.body;

        if(!mail || !html)
            return console.log('Заполните все поля ввода!');

        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false,
                auth: {
                    user: "tazer16179@gmail.com",
                    pass: "123456",
                },
            });

            try {
                await transporter.sendMail({
                    from: 'tazer16179@gmail.com',
                    to: "tazer1617@gmail.com",
                    subject: subject ? subject : 'Вам письмо от smmcraft.ru',
                    html,
                });

                return res.json({ status: true, response: { toMail: mail, msg: 'Сообщение успешно отправлено!' } });
    
            } catch (e) {
                return console.log(e);
            }

        } catch (e) {
            return console.log(e);
        }

    }
}

module.exports = new NodemailerController();