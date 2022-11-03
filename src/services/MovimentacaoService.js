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
                        aceito(results);
                    }
                );
            });
        } catch (error) {
            console.log(error)
        }
    },

    alterar: (idUsuario, idTipoMovimentacao, idCategoria, idDetalheMovimentacao, observacaoMovimentacao, valorMovimentacao, dataMovimentacao, idMovimentacao) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('UPDATE tblMovimentacao SET idUsuario = ?, idTipoMovimentacao = ?, idCategoria = ?, idDetalheMovimentacao = ?, observacaoMovimentacao = ?, valorMovimentacao = ?, dataMovimentacao = ? where idMovimentacao = ?',
                    [idUsuario, idTipoMovimentacao, idCategoria, idDetalheMovimentacao, observacaoMovimentacao, valorMovimentacao, dataMovimentacao, idMovimentacao],
                    (error, results) => {
                        if (error) { rejeitado(error); return; }
                        aceito(results);                        
                    }
                );
            });
        } catch (error) {
            console.log(error)
        }        
    },
    
    deletar: (idMovimentacao) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('DELETE FROM tblMovimentacao WHERE idMovimentacao = ?', [idMovimentacao], (error, results) => {
                    if (error) {
                        rejeitado(error);
                        return;
                    } else {
                        aceito(results.affectedRows);
                    }
                });
            });
        } catch (error) {
            console.log(error)
        }
    },

    buscarTodasReceitas: (idUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT * FROM tblMovimentacao where idUsuario = ? and idTipoMovimentacao = 1', [idUsuario], (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);

                });
            });
        } catch (error) {
            console.log(error)
        }
    },

    buscarTodasDespesas: (idUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT * FROM tblMovimentacao where idUsuario = and idTipoMovimentacao = 2', [idUsuario], (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);

                });
            });
        } catch (error) {
            console.log(error)
        }
    },

    buscarUmPorId: (idMovimentacao) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT * FROM tblMovimentacao where idMovimentacao = ?', [idMovimentacao], (error, results) => {
                    if (error) { rejeitado(error); return; }
                    if (results.length > 0) {
                        aceito(results[0]);                        
                    }
                    else {
                        aceito(false);
                    }
                });
            });
        } catch (error) {
            console.log(error)
        }
    },
}