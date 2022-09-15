const LoginService = require('../services/LoginService');

module.exports = {
    buscarLogin: async (req, res) => {
        try {
            let json = { error: '', result: {} };

            let emailUsuario = req.body.emailUsuario;
            let senhaUsuario = req.body.senhaUsuario;
        
            let usuario = await LoginService.buscarLogin(emailUsuario, senhaUsuario);

            if (usuario) {
                json.result = usuario;
            }
            else{
                json.result = 'Falha ao realizar autenticação!'
            }

            res.json(json);
        } catch (error) {
            console.log(error)
        }
    },

}
