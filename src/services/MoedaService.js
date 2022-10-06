const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM tblMoeda', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (idMoeda) => {
        return new Promise((aceito, rejeitado) =>{
            db.query('SELECT * FROM tblMoeda where idMoeda = ?', [idMoeda], (error, results)=>{
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }
                else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (descricaoMoeda) => {
        return new Promise((aceito, rejeitado) =>{
            db.query('INSERT INTO tblMoeda (descricaoMoeda) VALUES (?)', 
                [descricaoMoeda], 
                (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);                
                }
            );
        });
    },

    alterar: (idMoeda, descricaoMoeda) => {
        try{
            return new Promise((aceito, rejeitado) =>{
                db.query('UPDATE tblMoeda SET descricaoMoeda = ? where idMoeda = ?', 
                [descricaoMoeda, idMoeda], 
                    (error, results) => {
                        if(error){
                            rejeitado(error);
                            return; 
                        }
                        aceito(results);                
                    }
                );
            });
        } catch(error){            
            console.log(error);
        }        
    },

    deletar: (idMoeda) => {
        try{
            return new Promise((aceito, rejeitado)=>{
                db.query('DELETE FROM tblMoeda WHERE idMoeda = ?', [idMoeda], (error, results)=>{
                    if (error) {
                        rejeitado(error);
                        return;
                    } else {
                        aceito(results.affectedRows);
                    }                  
                });
            });
        } catch(error){
            console.log(error)
        }        
    },
};