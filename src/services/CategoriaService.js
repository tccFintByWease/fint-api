const { query } = require('../db');
const db = require('../db');

module.exports = {
    buscarTodos: (idUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query("SELECT * FROM tblCategoria where idUsuario = ? and statusCategoria = 'ativo'", [idUsuario], (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                });
            });
        } catch (error) {
            console.log(error)
        }
    },

    buscarUmPorId: (idCategoria) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT * FROM tblCategoria where idCategoria = ?', [idCategoria], (error, results) => {
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

    inserir: (idUsuario, idTipoMovimentacao, descricaoCategoria, corCategoria, statusCategoria) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('INSERT INTO tblCategoria (idUsuario, idTipoMovimentacao, descricaoCategoria, corCategoria, statusCategoria) VALUES (?, ?, ?, ?, ?)',
                    [idUsuario, idTipoMovimentacao, descricaoCategoria, corCategoria, statusCategoria],
                    (error, results) => {
                        if (error) { rejeitado(error); return; }
                        aceito(results.insertId);
                    }
                );
            });
        } catch (error) {
            console.log(error)
        }
    },

    alterar: (idCategoria, idUsuario, idTipoMovimentacao, descricaoCategoria, corCategoria, statusCategoria) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('UPDATE tblCategoria SET idUsuario = ?, idTipoMovimentacao = ?, descricaoCategoria = ?, corCategoria = ?, statusCategoria = ? where idCategoria = ?',
                    [idUsuario, idTipoMovimentacao, descricaoCategoria, corCategoria, statusCategoria, idCategoria],
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

    deletar: (idCategoria) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('DELETE FROM tblCategoria WHERE idCategoria = ?', [idCategoria], (error, results) => {
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

    buscarTodasCategorias: (idUsuario, idTipoMovimentacao) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query("SELECT * FROM tblCategoria where idUsuario = ? and idTipoMovimentacao = ? and statusCategoria = 'ativo'", [idUsuario, idTipoMovimentacao], (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                });
            });
        } catch (error) {
            console.log(error)
        }
    },

    buscarRecorrenciaCategoriaMovimentacao: (idUsuario, idTipoMovimentacao, dataInicial, dataFinal) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query("SELECT M.idCategoria, COUNT(M.idCategoria) as recorrenciaCategoria, C.descricaoCategoria, C.corCategoria FROM tblMovimentacao as M inner join tblCategoria as C on M.idCategoria = C.idCategoria where C.statusCategoria = 'ativo' and M.statusMovimentacao = 'ativo' and M.idUsuario = ? and M.idTipoMovimentacao = ? and M.dataMovimentacao BETWEEN ? AND ? group by idCategoria;",
                [idUsuario, idTipoMovimentacao, dataInicial, dataFinal],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);                        
                })
            });
        } catch (error) {
            console.log(error)
        }
    },
}