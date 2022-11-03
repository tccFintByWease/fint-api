const MovimentacaoService = require('../services/MovimentacaoService');

module.exports = {
    inserir: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idUsuario = req.body.idUsuario;
            let idTipoMovimentacao = req.body.idTipoMovimentacao;
            let idCategoria = req.body.idCategoria;
            let idDetalheMovimentacao = req.body.idDetalheMovimentacao;
            let observacaoMovimentacao = req.body.observacaoMovimentacao;
            let valorMovimentacao = req.body.valorMovimentacao;
            let dataMovimentacao = req.body.dataMovimentacao;
   
            if (idUsuario && idTipoMovimentacao && idCategoria && idDetalheMovimentacao && observacaoMovimentacao && valorMovimentacao && dataMovimentacao) {
                let idMovimentacao = await MovimentacaoService.inserir(idUsuario, idTipoMovimentacao, idCategoria, idDetalheMovimentacao, observacaoMovimentacao, valorMovimentacao, dataMovimentacao);
                json.result = {
                    idMovimentacao: idMovimentacao,
                    idUsuario,
                    idTipoMovimentacao,
                    idCategoria,
                    idDetalheMovimentacao,
                    observacaoMovimentacao,
                    valorMovimentacao,
                    dataMovimentacao
                };
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
            let idMovimentacao = req.body.idMovimentacao;
            let idUsuario = req.body.idUsuario;
            let idTipoMovimentacao = req.body.idTipoMovimentacao;
            let idCategoria = req.body.idCategoria;
            let idDetalheMovimentacao = req.body.idDetalheMovimentacao;
            let observacaoMovimentacao = req.body.observacaoMovimentacao;
            let valorMovimentacao = req.body.valorMovimentacao;
            let dataMovimentacao = req.body.dataMovimentacao;

            if (idMovimentacao && idUsuario && idTipoMovimentacao && idCategoria && idDetalheMovimentacao && observacaoMovimentacao && valorMovimentacao && dataMovimentacao) {
                let i = await MovimentacaoService.alterar(idUsuario, idTipoMovimentacao, idCategoria, idDetalheMovimentacao, observacaoMovimentacao, valorMovimentacao, dataMovimentacao, idMovimentacao);
                if (i.affectedRows > 0) {
                    json.result = {
                        idMovimentacao,
                        idUsuario,
                        idTipoMovimentacao,
                        idCategoria,
                        idDetalheMovimentacao,
                        observacaoMovimentacao,
                        valorMovimentacao,
                        dataMovimentacao
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
            let idMovimentacao = req.body.idMovimentacao;

            let i = await MovimentacaoService.deletar(idMovimentacao);

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

    buscarTodasReceitas: async (req, res) => {
        let json = { error: '', result: [] };

        try {
            let idUsuario = req.body.idUsuario;
            let movimentacoes = await MovimentacaoService.buscarTodasReceitas(idUsuario);

            for (let i in movimentacoes) {
                json.result.push({
                    idMovimentacao: movimentacoes[i].idMovimentacao,
                    idUsuario: movimentacoes[i].idUsuario,
                    idTipoMovimentacao: movimentacoes[i].idTipoMovimentacao,
                    idCategoria: movimentacoes[i].idCategoria,
                    idDetalheMovimentacao: movimentacoes[i].idDetalheMovimentacao,
                    observacaoMovimentacao: movimentacoes[i].observacaoMovimentacao,
                    valorMovimentacao: movimentacoes[i].valorMovimentacao,
                    dataMovimentacao: movimentacoes[i].dataMovimentacao
                });
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

    buscarTodasDespesas: async (req, res) => {
        let json = { error: '', result: [] };

        try {
            let idUsuario = req.body.idUsuario;
            let movimentacoes = await MovimentacaoService.buscarTodasDespesas(idUsuario);

            for (let i in movimentacoes) {
                json.result.push({
                    idMovimentacao: movimentacoes[i].idMovimentacao,
                    idUsuario: movimentacoes[i].idUsuario,
                    idTipoMovimentacao: movimentacoes[i].idTipoMovimentacao,
                    idCategoria: movimentacoes[i].idCategoria,
                    idDetalheMovimentacao: movimentacoes[i].idDetalheMovimentacao,
                    observacaoMovimentacao: movimentacoes[i].observacaoMovimentacao,
                    valorMovimentacao: movimentacoes[i].valorMovimentacao,
                    dataMovimentacao: movimentacoes[i].dataMovimentacao
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
            let idMovimentacao = req.body.idMovimentacao;
            let movimentacao = await MovimentacaoService.buscarUmPorId(idMovimentacao);

            if (movimentacao) {
                json.result = movimentacao;
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },
}