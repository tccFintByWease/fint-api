const { query } = require('../db');
const db = require('../db');

module.exports = {
    inserir: (idUsuario, idTipoMovimentacao, idCategoria, idDetalheMovimentacao, descricaoMovimentacao, observacaoMovimentacao, valorMovimentacao, dataMovimentacao) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('INSERT INTO tblMovimentacao (idUsuario, idTipoMovimentacao, idCategoria, idDetalheMovimentacao, descricaoMovimentacao, observacaoMovimentacao, valorMovimentacao, dataMovimentacao) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                    [idUsuario, idTipoMovimentacao, idCategoria, idDetalheMovimentacao, descricaoMovimentacao, observacaoMovimentacao, valorMovimentacao, dataMovimentacao],
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

    alterar: (idUsuario, idTipoMovimentacao, idCategoria, idDetalheMovimentacao, descricaoMovimentacao, observacaoMovimentacao, valorMovimentacao, dataMovimentacao, idMovimentacao) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('UPDATE tblMovimentacao SET idUsuario = ?, idTipoMovimentacao = ?, idCategoria = ?, idDetalheMovimentacao = ?, descricaoMovimentacao = ?, observacaoMovimentacao = ?, valorMovimentacao = ?, dataMovimentacao = ? where idMovimentacao = ?',
                    [idUsuario, idTipoMovimentacao, idCategoria, idDetalheMovimentacao, descricaoMovimentacao, observacaoMovimentacao, valorMovimentacao, dataMovimentacao, idMovimentacao],
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

    buscarTodasReceitas: (dataInicial, dataFinal, idUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT * FROM tblMovimentacao WHERE idUsuario = ? and idTipoMovimentacao = 1 and dataMovimentacao BETWEEN ? AND ? ORDER BY idMovimentacao DESC', [idUsuario, dataInicial, dataFinal], (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);

                });
            });
        } catch (error) {
            console.log(error)
        }
    },

    buscarTodasDespesas: (dataInicial, dataFinal, idUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT * FROM tblMovimentacao WHERE idUsuario = ? and idTipoMovimentacao = 1 and dataMovimentacao BETWEEN ? AND ? ORDER BY idMovimentacao DESC', [idUsuario, dataInicial, dataFinal], (error, results) => {
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
                db.query('SELECT * FROM tblMovimentacao WHERE idMovimentacao = ?', [idMovimentacao], (error, results) => {
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

    calcularDespesasReceitas: (idUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT M.idTipoMovimentacao, TM.descricaoTipoMovimentacao, SUM(M.valorMovimentacao) as somaMovimentacao FROM tblMovimentacao as M INNER JOIN tblTipoMovimentacao as TM on TM.idTipoMovimentacao = M.idTipomovimentacao WHERE idUsuario = ? GROUP BY M.idTipoMovimentacao', [idUsuario], (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);

                });
            });
        } catch (error) {
            console.log(error)
        }
    },


    
}