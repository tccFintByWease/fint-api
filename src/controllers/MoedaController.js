const MoedaService = require('../services/MoedaService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { error: '', result: [] };

        try {
            let moedas = await MoedaService.buscarTodos();

            for (let i in moedas) {
                json.result.push({
                    idMoeda: moedas[i].idMoeda,
                    descricaoMoeda: moedas[i].descricaoMoeda
                });
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.log(error);
        }
    },

    buscarUmPorId: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idMoeda = req.body.idMoeda;

            let moeda = await MoedaService.buscarUmId(idMoeda);

            if (moeda) {
                json.result = moeda;
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.log(error);
        }
    },

    buscarUmPorDescricao: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let descricaoMoeda = req.body.descricaoMoeda;

            let moeda = await MoedaService.buscarUmPorDescricao(descricaoMoeda);

            if (moeda) {
                json.result = moeda;
            }
            
            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.log(error);
        }
    },
}