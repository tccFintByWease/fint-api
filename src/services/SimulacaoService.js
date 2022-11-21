const { query } = require('../db');
const db = require('../db');

module.exports = {
    buscarTodasSimulacoesUsuario: (idUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT * FROM tblSimulacao where idUsuario = ?', [idUsuario], (error, results) => {
                    if (error) { rejeitado(error); return; }
                    if (results.length > 0) {
                        aceito(results);
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

    inserir: (idUsuario, descricaoSimulacao, investimentoInicialSimulacao, investimentoMensalSimulacao, taxaJurosSimulacao, dataInicialSimulacao, dataFinalSimulacao) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('INSERT INTO tblSimulacao (idUsuario, descricaoSimulacao, investimentoInicialSimulacao, investimentoMensalSimulacao, taxaJurosSimulacao, dataInicialSimulacao, dataFinalSimulacao) VALUES (?, ?, ?, ?, ?, ?, ?)',
                    [idUsuario, descricaoSimulacao, investimentoInicialSimulacao, investimentoMensalSimulacao, taxaJurosSimulacao, dataInicialSimulacao, dataFinalSimulacao],
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

    alterar: (idSimulacao, idUsuario, descricaoSimulacao, investimentoInicialSimulacao, investimentoMensalSimulacao, taxaJurosSimulacao,dataInicialSimulacao, dataFinalSimulacao) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('UPDATE tblSimulacao SET idUsuario = ?, descricaoSimulacao = ?, investimentoInicialSimulacao = ?, investimentoMensalSimulacao = ?, taxaJurosSimulacao = ?, dataInicialSimulacao = ?, dataFinalSimulacao = ? where idSimulacao = ?',
                    [idUsuario, descricaoSimulacao, investimentoInicialSimulacao, investimentoMensalSimulacao, taxaJurosSimulacao, dataInicialSimulacao, dataFinalSimulacao, idSimulacao],
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

    deletar: (idSimulacao) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('DELETE FROM tblSimulacao WHERE idSimulacao = ?', [idSimulacao], (error, results) => {
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

    buscarUmPorId: (idSimulacao) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT * FROM tblSimulacao where idSimulacao = ?', [idSimulacao], (error, results) => {
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