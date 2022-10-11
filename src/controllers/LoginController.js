const LoginService = require('../services/LoginService');

module.exports = {
    buscarLogin: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let emailUsuario = req.body.emailUsuario;
            let senhaUsuario = req.body.senhaUsuario;

            let usuario = await LoginService.buscarLogin(emailUsuario, senhaUsuario);

            if (usuario) {
                json.result = usuario;
            }
           
            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.log(error);
        }
    },

}
