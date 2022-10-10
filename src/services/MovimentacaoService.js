const { query } = require('../db');
const db = require('../db');

module.exports = {
    inserir: (idUsuario, idTipoMovimentacao, idCategoria, idDetalheMovimentacao, observacaoMovimentacao, valorMovimentacao, dataMovimentacao) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('INSERT INTO tblMovimentacao (idUsuario, idTipoMovimentacao, idCategoria, idDetalheMovimentacao, observacaoMovimentacao, valorMovimentacao, dataMovimentacao) VALUES (?, ?, ?, ?, ?, ?, ?)',
                    [idUsuario, idTipoMovimentacao, idCategoria, idDetalheMovimentacao, observacaoMovimentacao, valorMovimentacao, dataMovimentacao],
                    (error, results) => {
                        if (error) { rejeitado(error); return; }
                        aceito(results.insertCodigo);
                    }
                );
            });
        } catch (error) {
            console.log(error)
        }
    },

    
}