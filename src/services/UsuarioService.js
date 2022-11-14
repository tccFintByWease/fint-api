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

    inserir: (statusUsuario, idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('INSERT INTO tblUsuario (statusUsuario, idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                    [statusUsuario, idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario],
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

    alterar: (idUsuario, statusUsuario, idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('UPDATE tblUsuario SET statusUsuario = ?, idMoeda = ?, nomeUsuario = ?, emailUsuario = ?, senhaUsuario = ?, cpfUsuario = ?, foneUsuario = ?, dataNascUsuario = ?, dataCadastroUsuario = ? where idUsuario = ?',
                    [statusUsuario, idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario, idUsuario],
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
    
    alterarStatus: (statusUsuario, emailUsuario, senhaUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('UPDATE tblUsuario SET statusUsuario = ? WHERE emailUsuario = ? AND senhaUsuario = ?',
                    [statusUsuario, emailUsuario, senhaUsuario],
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

    alterarSenha: (senhaUsuario, emailUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('UPDATE tblUsuario SET senhaUsuario = ? WHERE emailUsuario = ?',
                    [senhaUsuario, emailUsuario],
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

    //--

    inserirTipoUsuario: (idAssinatura, idUsuario, dataMudancaTipoUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('INSERT INTO tblTipoUsuario (idAssinatura, idUsuario, dataMudancaTipoUsuario) VALUES (?, ?, ?)',
                    [idAssinatura, idUsuario, dataMudancaTipoUsuario],
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

    alterarTipoUsuario: (idAssinatura, idUsuario, dataMudancaTipoUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('UPDATE tblTipoUsuario SET idAssinatura = ?, idUsuario = ?, dataMudancaTipoUsuario = ? where idUsuario = ?',
                    [idAssinatura, dataMudancaTipoUsuario, idUsuario],
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

    verificarTipoUsuario: (idUsuario) => {
        try {
            return new Promise((aceito, rejeitado) => {
                db.query('select * from tblTipoUsuario where idUsuario = ?', [idUsuario], (error, results) => {
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
    }
};