const EmailService = require('../services/EmailService');

module.exports = {
    solicitarCodigo: async (req, res) => {
        try {
            let emailUsuario = req.body.emailUsuario;
            let nomeUsuario = req.body.nomeUsuario;

            const digitoUm = String(Math.floor(Math.random() * 10));
            const digitoDois = String(Math.floor(Math.random() * 10));
            const digitoTres = String(Math.floor(Math.random() * 10));
            const digitoQuatro = String(Math.floor(Math.random() * 10));
            const digitoCinco = String(Math.floor(Math.random() * 10));
            const digitoSeis = String(Math.floor(Math.random() * 10));

            const codigoVerificacao = digitoUm + digitoDois + digitoTres + digitoQuatro + digitoCinco + digitoSeis;

            let json = await EmailService.enviarEmail(emailUsuario, nomeUsuario, codigoVerificacao)

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },
}
