const UsuarioService = require('../services/UsuarioService');

module.exports = {

    buscarTodos: async (req, res) => {
        let json = { error: '', result: [] };

        try {
            let usuarios = await UsuarioService.buscarTodos();

            for (let i in usuarios) {
                json.result.push({
                    idUsuario: usuarios[i].idUsuario,
                    statusUsuario: usuarios[i].statusUsuario,
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
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

    buscarUmPorId: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idUsuario = req.body.idUsuario;
            let usuario = await UsuarioService.buscarUmPorId(idUsuario);

            if (usuario) {
                json.result = usuario;
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
            let statusUsuario = req.body.statusUsuario;
            let idMoeda = req.body.idMoeda;
            let nomeUsuario = req.body.nomeUsuario;
            let emailUsuario = req.body.emailUsuario;
            let senhaUsuario = req.body.senhaUsuario;
            let cpfUsuario = req.body.cpfUsuario;
            let foneUsuario = req.body.foneUsuario;
            let dataNascUsuario = req.body.dataNascUsuario;
            let dataCadastroUsuario = req.body.dataCadastroUsuario;

            if (statusUsuario && idMoeda && nomeUsuario && emailUsuario && senhaUsuario && cpfUsuario && foneUsuario && dataNascUsuario && dataCadastroUsuario) {
                let idUsuario = await UsuarioService.inserir(statusUsuario, idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario);

                json.result = {
                    idUsuario: idUsuario,
                    statusUsuario,
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

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

    alterar: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idUsuario = req.body.idUsuario;
            let statusUsuario = req.body.statusUsuario;
            let idMoeda = req.body.idMoeda;
            let nomeUsuario = req.body.nomeUsuario;
            let emailUsuario = req.body.emailUsuario;
            let senhaUsuario = req.body.senhaUsuario;
            let cpfUsuario = req.body.cpfUsuario;
            let foneUsuario = req.body.foneUsuario;
            let dataNascUsuario = req.body.dataNascUsuario;
            let dataCadastroUsuario = req.body.dataCadastroUsuario;

            if (idUsuario && statusUsuario && idMoeda && nomeUsuario && emailUsuario && senhaUsuario && cpfUsuario && foneUsuario && dataNascUsuario && dataCadastroUsuario) {
                let i = await UsuarioService.alterar(idUsuario, statusUsuario, idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario);
                if (i.affectedRows > 0) {
                    json.result = {
                        idUsuario,
                        statusUsuario,
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
                json.result = 'Nenhum registro encontrado!'
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
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

    buscarUmPorCPF: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let cpfUsuario = req.body.cpfUsuario;

            let usuario = await UsuarioService.buscarUmPorCPF(cpfUsuario);

            if (usuario) {
                json.result = usuario;
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

    buscarUmPorFone: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let foneUsuario = req.body.foneUsuario;

            let usuario = await UsuarioService.buscarUmPorFone(foneUsuario);

            if (usuario) {
                json.result = usuario;
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

    //--

    inserirTipoUsuario: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idAssinatura = req.body.idAssinatura;
            let idUsuario = req.body.idUsuario;
            let dataMudancaTipoUsuario = req.body.dataMudancaTipoUsuario;

            if (idAssinatura && idUsuario && dataMudancaTipoUsuario) {
                await UsuarioService.inserirTipoUsuario(idAssinatura, idUsuario, dataMudancaTipoUsuario);

                json.result = {
                    idAssinatura,
                    idUsuario,
                    descricaoTipoUsuario,
                    dataMudancaTipoUsuario
                };
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

    alterarTipoUsuario: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idAssinatura = req.body.idAssinatura;
            let idUsuario = req.body.idUsuario;
            let descricaoTipoUsuario = req.body.descricaoTipoUsuario;
            let dataMudancaTipoUsuario = req.body.dataMudancaTipoUsuario;

            if (idAssinatura && idUsuario && dataMudancaTipoUsuario) {
                let i = await UsuarioService.alterarTipoUsuario(idAssinatura, idUsuario, dataMudancaTipoUsuario);
                if (i.affectedRows > 0) {
                    json.result = {
                        idAssinatura,
                        idUsuario,
                        descricaoTipoUsuario,
                        dataMudancaTipoUsuario
                    };
                }
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.log(error);
        }
    },

    alterarStatus: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let statusUsuario = req.body.statusUsuario;
            let emailUsuario = req.body.emailUsuario;
            let senhaUsuario = req.body.senhaUsuario;

            if (statusUsuario && emailUsuario && senhaUsuario) {
                let i = await UsuarioService.alterarStatus(statusUsuario, emailUsuario, senhaUsuario);
                if (i.affectedRows > 0) {
                    json.result = {
                        statusUsuario,
                        emailUsuario,
                        senhaUsuario
                    };
                }
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.log(error);
        }
    },

    alterarSenha: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let senhaUsuario = req.body.senhaUsuario;
            let emailUsuario = req.body.emailUsuario;

            if (senhaUsuario && idUsuario) {
                let i = await UsuarioService.alterarSenha(senhaUsuario, emailUsuario);
                if (i.affectedRows > 0) {
                    json.result = {
                        senhaUsuario,
                        emailUsuario
                    };
                }
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.log(error);
        }
    },

    verificarTipoUsuario: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idUsuario = req.body.idUsuario;

            let tipoUsuario = await UsuarioService.verificarTipoUsuario(idUsuario);

            if (tipoUsuario) {
                json.result = tipoUsuario;
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },
}