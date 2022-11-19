const nodemailer = require('nodemailer');

module.exports = {
    enviarEmail: (emailUsuario, nomeUsuario, codigoVerificacao) => {
        let json = { error: '', result: [] };

        try {
            var transport = nodemailer.createTransport({
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "fe92e1155aed40",
                    pass: "12cb51335fa997"
                }
            });

            var message = {
                from: "fintbywease@gmail.com",
                to: emailUsuario,
                subject: "Instrução para recuperar a senha",
                text: "Prezado(a) " + nomeUsuario + ". \n\nVocê solicitou alteração de senha.\n\n",
                html: "Prezado(a) " + nomeUsuario + ". <br><br>Você solicitou alteração de senha.<br><br>Segue o código de verificação: " + codigoVerificacao
            };

            transport.sendMail(message, function (err) {
                if (err) return json.status(400).json({
                    erro: true,
                    mensagem: "Erro: E-mail não enviado com sucesso!"
                });
            });

            json.result = {
                emailUsuario: emailUsuario,
                nomeUsuario: nomeUsuario,
                codigoVerificacao: codigoVerificacao
            };

            return json;
        } catch (error) {
            console.log(error)
        }
    },
}