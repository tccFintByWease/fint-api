const { query } = require('../db');
const db = require('../db');

module.exports = {
    buscarTodos: () => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT * FROM tblUsuario', (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                });
            });
        } catch (error) {
            console.log(error)
        }
    },

    buscarUmPorId: (idUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT * FROM tblUsuario where idUsuario = ?', [idUsuario], (error, results) => {
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

    inserir: (idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('INSERT INTO tblUsuario (idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                    [idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario],
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

    alterar: (idUsuario, idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('UPDATE tblUsuario SET idMoeda = ?, nomeUsuario = ?, emailUsuario = ?, senhaUsuario = ?, cpfUsuario = ?, foneUsuario = ?, dataNascUsuario = ?, dataCadastroUsuario = ? where idUsuario = ?',
                    [idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario, idUsuario],
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

    deletar: (idUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('DELETE FROM tblUsuario WHERE idUsuario = ?', [idUsuario], (error, results) => {
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

    buscarUmPorEmail: (emailUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT * FROM tblUsuario where emailUsuario = ?', [emailUsuario], (error, results) => {                
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

    buscarUmPorCPF: (cpfUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT * FROM tblUsuario where cpfUsuario = ?', [cpfUsuario], (error, results) => {                
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

    buscarUmPorFone: (foneUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('SELECT * FROM tblUsuario where foneUsuario = ?', [foneUsuario], (error, results) => {                
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
};