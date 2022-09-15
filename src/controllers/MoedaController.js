const MoedaService = require('../services/MoedaService');

module.exports = {
    buscarTodos: async (req, res)=>{
        let json = {error:'', result:[]};
    
        let moedas = await MoedaService.buscarTodos();

        for(let i in moedas){
            json.result.push({
                idMoeda: moedas[i].idMoeda,
                descricaoMoeda: moedas[i].descricaoMoeda
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res)=>{
        let json = {error:'', result:{}};
    
        let idMoeda = req.params.idMoeda;
        let moeda = await MoedaService.buscarUm(idMoeda);

        if(moeda){
            json.result = moeda;        
        }

        res.json(json);
    },

    inserir: async (req, res)=>{
        let json = {error:'', result:{}};
    
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
    },

    
}