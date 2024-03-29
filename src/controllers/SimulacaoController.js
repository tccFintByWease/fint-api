const SimulacaoService = require('../services/SimulacaoService');

module.exports = {
    buscarTodasSimulacoesUsuario: async (req, res) => {
        let json = { error: '', result: [] };

        try {
            let idUsuario = req.body.idUsuario;
            let simulacao = await SimulacaoService.buscarTodasSimulacoesUsuario(idUsuario);

            for (let i in simulacao) {
                json.result.push({
                    idSimulacao: simulacao[i].idSimulacao,
                    idUsuario: simulacao[i].idUsuario,
                    descricaoSimulacao: simulacao[i].descricaoSimulacao,
                    investimentoInicialSimulacao: simulacao[i].investimentoInicialSimulacao,
                    investimentoMensalSimulacao: simulacao[i].investimentoMensalSimulacao,
                    taxaJurosSimulacao: simulacao[i].taxaJurosSimulacao,
                    dataInicialSimulacao: simulacao[i].dataInicialSimulacao,
                    dataFinalSimulacao: simulacao[i].dataFinalSimulacao,
                });
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
            let idUsuario = req.body.idUsuario;
            let descricaoSimulacao = req.body.descricaoSimulacao;
            let investimentoInicialSimulacao = req.body.investimentoInicialSimulacao;
            let investimentoMensalSimulacao = req.body.investimentoMensalSimulacao;
            let taxaJurosSimulacao = req.body.taxaJurosSimulacao;
            let dataInicialSimulacao = req.body.dataInicialSimulacao;
            let dataFinalSimulacao = req.body.dataFinalSimulacao;

            if (idUsuario && descricaoSimulacao && investimentoInicialSimulacao && investimentoMensalSimulacao && taxaJurosSimulacao && dataInicialSimulacao && dataFinalSimulacao) {
                let idSimulacao = await SimulacaoService.inserir(idUsuario, descricaoSimulacao, investimentoInicialSimulacao, investimentoMensalSimulacao, taxaJurosSimulacao, dataInicialSimulacao, dataFinalSimulacao);

                json.result = {
                    idSimulacao: idSimulacao,
                    idUsuario,
                    descricaoSimulacao,
                    investimentoInicialSimulacao,
                    investimentoMensalSimulacao,
                    taxaJurosSimulacao,
                    dataInicialSimulacao,
                    dataFinalSimulacao
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

            let idSimulacao = req.body.idSimulacao;
            let idUsuario = req.body.idUsuario;
            let descricaoSimulacao = req.body.descricaoSimulacao;
            let investimentoInicialSimulacao = req.body.investimentoInicialSimulacao;
            let investimentoMensalSimulacao = req.body.investimentoMensalSimulacao;
            let taxaJurosSimulacao = req.body.taxaJurosSimulacao;
            let dataInicialSimulacao = req.body.dataInicialSimulacao;
            let dataFinalSimulacao = req.body.dataFinalSimulacao;

            if (idSimulacao && idUsuario && descricaoSimulacao && investimentoInicialSimulacao && investimentoMensalSimulacao && taxaJurosSimulacao && dataInicialSimulacao && dataFinalSimulacao) {
                let i = await SimulacaoService.alterar(idSimulacao, idUsuario, descricaoSimulacao, investimentoInicialSimulacao, investimentoMensalSimulacao, taxaJurosSimulacao, dataInicialSimulacao, dataFinalSimulacao);
                if (i.affectedRows > 0) {
                    json.result = {
                        idSimulacao,
                        idUsuario,
                        descricaoSimulacao,
                        investimentoInicialSimulacao,
                        investimentoMensalSimulacao,
                        taxaJurosSimulacao,
                        dataInicialSimulacao,
                        dataFinalSimulacao
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
            let idSimulacao = req.body.idSimulacao;

            let i = await SimulacaoService.deletar(idSimulacao);

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

    buscarUmPorId: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idSimulacao = req.body.idSimulacao;
            let simulacao = await SimulacaoService.buscarUmPorId(idSimulacao);

            if (simulacao) {
                json.result = simulacao;
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },
}
