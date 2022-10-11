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

    buscarUmPorId: (idMoeda) => {
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

    buscarUmPorDescricao: (descricaoMoeda) => {
        return new Promise((aceito, rejeitado) =>{
            db.query('SELECT * FROM tblMoeda where descricaoMoeda = ?', [descricaoMoeda], (error, results)=>{
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }
                else{
                    aceito(false);
                }
            });
        });
    }
};