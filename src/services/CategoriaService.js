const { query } = require('../db');
const db = require('../db');

module.exports = {
    buscarTodos: (idUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT * FROM tblCategoria where idUsuario = ?', [idUsuario], (error, results) => {
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

    inserir: (idUsuario, idTipoMovimentacao, descricaoCategoria, corCategoria) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('INSERT INTO tblCategoria (idUsuario, idTipoMovimentacao, descricaoCategoria, corCategoria) VALUES (?, ?, ?, ?)',
                    [idUsuario, idTipoMovimentacao, descricaoCategoria, corCategoria],
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

    alterar: (idCategoria, idUsuario, idTipoMovimentacao, descricaoCategoria, corCategoria) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('UPDATE tblCategoria SET idUsuario = ?, idTipoMovimentacao = ?, descricaoCategoria = ?, corCategoria = ? where idCategoria = ?',
                    [idUsuario, idTipoMovimentacao, descricaoCategoria, corCategoria, idCategoria],
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

    buscarTodosTipoMovimentacao: () => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT * FROM tblTipoMovimentacao', (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                });
            });
        } catch (error) {
            console.log(error)
        }
    },
}