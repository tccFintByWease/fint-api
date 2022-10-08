const { buscarUmPorEmail } = require('../services/UsuarioService');
const UsuarioService = require('../services/UsuarioService');

module.exports = {

    buscarTodos: async (req, res) => {
        let json = { error: '', result: [] };

        try {
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

            if (!json) {
                json.error = 'Nenhum registro encontrado!';
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

    buscarUm: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idUsuario = req.body.idUsuario;
            let usuario = await UsuarioService.buscarUm(idUsuario);

            if (usuario) {
                json.result = usuario;
            } else {
                json.error = 'Nenhum registro encontrado!';
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

    inserir: async (req, res) => {
        let json = { error: '', result: {} };

        try {
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
                json.error = 'Campos não enviados!';
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.log(error);
        }
    },

    alterar: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idUsuario = req.body.idUsuario;
            let idMoeda = req.body.idMoeda;
            let nomeUsuario = req.body.nomeUsuario;
            let emailUsuario = req.body.emailUsuario;
            let senhaUsuario = req.body.senhaUsuario;
            let cpfUsuario = req.body.cpfUsuario;
            let foneUsuario = req.body.foneUsuario;
            let dataNascUsuario = req.body.dataNascUsuario;
            let dataCadastroUsuario = req.body.dataCadastroUsuario;

            if (idUsuario && idMoeda && nomeUsuario && emailUsuario && senhaUsuario && cpfUsuario && foneUsuario && dataNascUsuario && dataCadastroUsuario) {
                let i = await UsuarioService.alterar(idUsuario, idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario);
                if (i.affectedRows > 0) {
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
                }
                else {
                    json.error = 'Nenhum registro encontrado!'
                }

            } else {
                json.error = 'Campos não enviados!';
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.log(error);
        }
    },

    deletar: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idUsuario = req.body.idUsuario;

            let i = await UsuarioService.deletar(idUsuario);

            if (i > 0) {
                json.result = 'Registro deletado com sucesso!';
            } else {
                json.error = 'Nenhum registro encontrado!'
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.log(error)
        }
    },

    buscarUmPorEmail: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let emailUsuario = req.body.emailUsuario;
            
            let usuario = await UsuarioService.buscarUmPorEmail(emailUsuario);

            if (usuario) {
                json.result = usuario;
            } else {
                json.error = 'Nenhum registro encontrado!';
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },
}