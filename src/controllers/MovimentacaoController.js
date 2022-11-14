const MovimentacaoService = require('../services/MovimentacaoService');

module.exports = {
    inserir: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idUsuario = req.body.idUsuario;
            let idTipoMovimentacao = req.body.idTipoMovimentacao;
            let idCategoria = req.body.idCategoria;
            let idDetalheMovimentacao = req.body.idDetalheMovimentacao;
            let descricaoMovimentacao = req.body.descricaoMovimentacao;
            let observacaoMovimentacao = req.body.observacaoMovimentacao;
            let valorMovimentacao = req.body.valorMovimentacao;
            let dataMovimentacao = req.body.dataMovimentacao;
   
            if (idUsuario && idTipoMovimentacao && idCategoria && idDetalheMovimentacao && descricaoMovimentacao && observacaoMovimentacao && valorMovimentacao && dataMovimentacao) {
                let idMovimentacao = await MovimentacaoService.inserir(idUsuario, idTipoMovimentacao, idCategoria, idDetalheMovimentacao, descricaoMovimentacao, observacaoMovimentacao, valorMovimentacao, dataMovimentacao);
                json.result = {
                    idMovimentacao: idMovimentacao,
                    idUsuario,
                    idTipoMovimentacao,
                    idCategoria,
                    idDetalheMovimentacao,
                    descricaoMovimentacao,
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
            let descricaoMovimentacao = req.body.descricaoMovimentacao;
            let observacaoMovimentacao = req.body.observacaoMovimentacao;
            let valorMovimentacao = req.body.valorMovimentacao;
            let dataMovimentacao = req.body.dataMovimentacao;

            if (idMovimentacao && idUsuario && idTipoMovimentacao && idCategoria && idDetalheMovimentacao && descricaoMovimentacao && observacaoMovimentacao && valorMovimentacao && dataMovimentacao) {
                let i = await MovimentacaoService.alterar(idUsuario, idTipoMovimentacao, idCategoria, idDetalheMovimentacao, descricaoMovimentacao, observacaoMovimentacao, valorMovimentacao, dataMovimentacao, idMovimentacao);
                if (i.affectedRows > 0) {
                    json.result = {
                        idMovimentacao,
                        idUsuario,
                        idTipoMovimentacao,
                        idCategoria,
                        idDetalheMovimentacao,
                        descricaoMovimentacao,
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
            let dataInicial = req.body.dataInicial;
            let dataFinal = req.body.dataFinal;
            let movimentacoes = await MovimentacaoService.buscarTodasReceitas(dataInicial, dataFinal, idUsuario);

            for (let i in movimentacoes) {
                json.result.push({
                    idMovimentacao: movimentacoes[i].idMovimentacao,
                    idUsuario: movimentacoes[i].idUsuario,
                    idTipoMovimentacao: movimentacoes[i].idTipoMovimentacao,
                    idCategoria: movimentacoes[i].idCategoria,
                    idDetalheMovimentacao: movimentacoes[i].idDetalheMovimentacao,
                    detalheMovimentacao: movimentacoes[i].detalheMovimentacao,
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
            let dataInicial = req.body.dataInicial;
            let dataFinal = req.body.dataFinal;

            console.log(idUsuario);
            console.log(dataInicial);
            console.log(dataFinal);

            let movimentacoes = await MovimentacaoService.buscarTodasDespesas(dataInicial, dataFinal, idUsuario);

            for (let i in movimentacoes) {
                json.result.push({
                    idMovimentacao: movimentacoes[i].idMovimentacao,
                    idUsuario: movimentacoes[i].idUsuario,
                    idTipoMovimentacao: movimentacoes[i].idTipoMovimentacao,
                    idCategoria: movimentacoes[i].idCategoria,
                    idDetalheMovimentacao: movimentacoes[i].idDetalheMovimentacao,
                    detalheMovimentacao: movimentacoes[i].detalheMovimentacao,
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

    calcularDespesasReceitas: async (req, res) => {
        let json = { error: '', result: [] };

        try {
            let idUsuario = req.body.idUsuario;           
            let registro = await MovimentacaoService.calcularDespesasReceitas(idUsuario);
            
            for (let i in registro) {
                json.result.push({
                    idTipoMovimentacao: registro[i].idTipoMovimentacao,
                    descricaoTipoMovimentacao: registro[i].descricaoTipoMovimentacao,
                    somaMovimentacao: registro[i].somaMovimentacao,
                    
                });
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

}