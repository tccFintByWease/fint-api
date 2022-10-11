const { query } = require('../db');
const db = require('../db');

module.exports = {
    buscarTodos: () => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT * FROM tblGrafico', (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                });
            });
        } catch (error) {
            console.log(error)
        }
    },

    buscarGraficoUsuario: (idUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('Select G.* from tblGrafico as G inner join tblUsuario as U inner join tblUsuarioGrafico as UG on UG.idGrafico = G.idGrafico and UG.idUsuario = U.idUsuario where U.idUsuario = ?',
                [idUsuario], (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                });
            });
        } catch (error) {
            console.log(error)
        }
    },

    inserirGraficoUsuario: (idUsuario, idGrafico) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('INSERT INTO tblUsuarioGrafico (idGrafico, idUsuario) VALUES (?, ?)',
                    [idGrafico, idUsuario],
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

    deletarGraficoUsuario: (idUsuario, idGrafico) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('DELETE FROM tblUsuarioGrafico WHERE idUsuario = ? and idGrafico = ?', [idUsuario, idGrafico], (error, results) => {
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
}