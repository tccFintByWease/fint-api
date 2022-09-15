const db = require('../db');

module.exports = {
    buscarLogin: (emailUsuario, senhaUsuario) => {
        try{
            return new Promise((aceito, rejeitado) =>{
                db.query('SELECT * FROM tblUsuario where emailUsuario = ? and senhaUsuario = ?', [emailUsuario, senhaUsuario], (error, results)=>{
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
}