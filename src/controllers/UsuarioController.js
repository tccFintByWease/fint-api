const UsuarioService = require('../services/UsuarioService');

module.exports = {

    buscarTodos: async (req, res) => {
        try {
            let json = { error: '', result: [] };

            let usuarios = await UsuarioService.buscarTodos();

            for (let i in usuarios) {
                json.result.push({
                    idUsuario: usuarios[i].idUsuario,
                    idMoeda: usuarios[i].idMoeda,
                    nomeUsuario: usuarios[i].nomeUsuario,
                    emailUsuario: usuarios[i].emailUsuario,
                    senhaUsuario: usuarios[i].senhaUsuario,
                    cpfUsuario: usuarios[i].cpfUsuario,
                    foneUsuario: usuarios[i].foneUsuario,
                    dataNascUsuario: usuarios[i].dataNascUsuario,
                    dataCadastroUsuario: usuarios[i].dataCadastroUsuario
                });
            }
            res.json(json);
        } catch (error) {
            console.error(error);
        }
    },

    buscarUm: async (req, res) => {
        try {
            let json = { error: '', result: {} };

            let idUsuario = req.params.idUsuario;
            let usuario = await UsuarioService.buscarUm(idUsuario);

            if (usuario) {
                json.result = usuario;
            }
            else{
                json.result = "Falha ao realizar autentificação";

            }

            res.json(json);
        } catch (error) {
            console.log(error)
        }
    },

    inserir: async (req, res) => {
        try {
            let json = { error: '', result: {} };

            let idMoeda = req.body.idMoeda;
            let nomeUsuario = req.body.nomeUsuario;
            let emailUsuario = req.body.emailUsuario;
            let senhaUsuario = req.body.senhaUsuario;
            let cpfUsuario = req.body.cpfUsuario;
            let foneUsuario = req.body.foneUsuario;
            let dataNascUsuario = req.body.dataNascUsuario;
            let dataCadastroUsuario = req.body.dataCadastroUsuario;

            if (idMoeda && nomeUsuario && emailUsuario && senhaUsuario && cpfUsuario && foneUsuario && dataNascUsuario && dataCadastroUsuario) {
                let idUsuario = await UsuarioService.inserir(idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario);
                json.result = {
                    idUsuario: idUsuario,
                    idMoeda,
                    nomeUsuario,
                    emailUsuario,
                    senhaUsuario,
                    cpfUsuario,
                    foneUsuario,
                    dataNascUsuario,
                    dataCadastroUsuario
                };
            } else {
                json.error = 'Campos não enviados';
            }

            res.json(json);
        } catch (error) {
            console.log(error);
        }
    },

    alterar: async (req, res) => {
        try {
            let json = { error: '', result: {} };

            let idUsuario = req.params.idUsuario;
            let idMoeda = req.body.idMoeda;
            let nomeUsuario = req.body.nomeUsuario;
            let emailUsuario = req.body.emailUsuario;
            let senhaUsuario = req.body.senhaUsuario;
            let cpfUsuario = req.body.cpfUsuario;
            let foneUsuario = req.body.foneUsuario;
            let dataNascUsuario = req.body.dataNascUsuario;
            let dataCadastroUsuario = req.body.dataCadastroUsuario;

            if (idUsuario && idMoeda && nomeUsuario && emailUsuario && senhaUsuario && cpfUsuario && foneUsuario && dataNascUsuario && dataCadastroUsuario) {
                await UsuarioService.alterar(idUsuario, idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario);
                json.result = {
                    idUsuario,
                    idMoeda,
                    nomeUsuario,
                    emailUsuario,
                    senhaUsuario,
                    cpfUsuario,
                    foneUsuario,
                    dataNascUsuario,
                    dataCadastroUsuario
                };
            } else {
                json.error = 'Campos não enviados';
            }

            res.json(json);
        } catch (error) {
            console.log(error);
        }
    },

    excluir: async (req, res) => {
        try {
            let json = { error: '', result: {} };

            json.result = {
                resultado: 1
            };

            res.json(json);
        } catch (error) {
            console.log(error)
        }
    }
}