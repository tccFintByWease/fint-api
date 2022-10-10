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

}