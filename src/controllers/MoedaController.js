const MoedaService = require('../services/MoedaService');

module.exports = {
    buscarTodos: async (req, res)=>{
        let json = {error:'', result:[]};

        try{
            let moedas = await MoedaService.buscarTodos();
    
            for(let i in moedas){
                json.result.push({
                    idMoeda: moedas[i].idMoeda,
                    descricaoMoeda: moedas[i].descricaoMoeda
                });
            }
            res.json(json);
        }catch(error){
            json.error = error;
            res.json(json);
            console.log(error);  
        }
    },

    buscarUm: async (req, res)=>{
        let json = {error:'', result:{}};
    
        try{
            let idMoeda = req.body.idMoeda;
    
            console.log(idMoeda);
    
            let moeda = await MoedaService.buscarUm(idMoeda);
    
            if(moeda){
                json.result = moeda;        
            }
    
            res.json(json);
        }catch(error){
            json.error = error;
            res.json(json);
            console.log(error);  
        }
    },

    inserir: async (req, res)=>{
        let json = {error:'', result:{}};
    
        try {
            let descricaoMoeda = req.body.descricaoMoeda;

            if(descricaoMoeda){
                let idMoeda = await MoedaService.inserir(descricaoMoeda);
                json.result = {
                    idMoeda: idMoeda,
                    descricaoMoeda
                };
            }else{
                json.error = 'Campos não enviados!';
            }
    
            res.json(json);
        }
        catch(error){
            json.error = error;
            res.json(json);
            console.log(error);  
        }
    },
    
    alterar: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idMoeda = req.body.idMoeda;
            let descricaoMoeda = req.body.descricaoMoeda;
           
            if (idMoeda && descricaoMoeda) {
                await MoedaService.alterar(idMoeda, descricaoMoeda);
                json.result = {
                    idMoeda,
                    descricaoMoeda
                };

            } else {
                json.error = 'Campos não enviados';
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.log(error);           
        }
    },

    deletar: async (req, res) => {        
        let json = { error: '', result: {} };

        try {
            let idMoeda = req.body.idMoeda;

            await MoedaService.deletar(idMoeda);

            json.result = {
                resultado: 1
            };

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.log(error)
        }
    }

    
}