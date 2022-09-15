const db = require('../db');

module.exports = {
    buscarTodos: () => {
        try{
            return new Promise((aceito, rejeitado)=>{

                db.query('SELECT * FROM tblUsuario', (error, results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results);
                });
            });
        } catch(error){
            console.log(error)
        }
    },

    buscarUm: (idUsuario) => {
        try{
            return new Promise((aceito, rejeitado) =>{
                db.query('SELECT * FROM tblUsuario where idUsuario = ?', [idUsuario], (error, results)=>{
                    if(error) { rejeitado(error); return; }
                    if(results.length > 0){
                        aceito(results[0]);
                    }
                    else{
                        aceito(false);
                    }
                });
            });
        } catch(error){
            console.log(error)
        }        
    },

    inserir: (idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario) => {
        try{
            return new Promise((aceito, rejeitado) =>{
                db.query('INSERT INTO tblUsuario (idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
                    [idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario], 
                    (error, results) => {
                        if(error) { rejeitado(error); return; }
                        aceito(results.insertCodigo);                
                    }
                );
            });
        } catch(error){
            console.log(error)
        }        
    },

    alterar: (idUsuario, idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario) => {
        try{
            return new Promise((aceito, rejeitado) =>{
                db.query('UPDATE tblUsuario SET idMoeda=@idMoeda, nomeUsuario=@nomeUsuario, emailUsuario=@emailUsuario, senhaUsuario=@senhaUsuario, cpfUsuario=@cpfUsuario, foneUsuario=@foneUsuario, dataNascUsuario=@dataNascUsuario, dataCadastroUsuario=@dataCadastroUsuario where idUsuario = ?', 
                [idMoeda, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario, foneUsuario, dataNascUsuario, dataCadastroUsuario, idUsuario], 
                    (error, results) => {
                        if(error) { rejeitado(error); return; }
                        aceito(results);                
                    }
                );
            });
        } catch(error){
            console.log(error)
        }        
    },

    excluir: (idUsuario) => {
        try{
            return new Promise((aceito, rejeitado)=>{
                db.query('DELETE FROM tblUsuario WHERE idUsuario = ?', [idUsuario], (error, results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results);                   
                });
            });
        } catch(error){
            console.log(error)
        }        
    },
};