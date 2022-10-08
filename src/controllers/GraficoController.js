const GraficoService = require('../services/GraficoService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { error: '', result: [] };
    
        try {
            let grafico = await GraficoService.buscarTodos();
    
            for (let i in grafico) {
                json.result.push({
                    idGrafico: grafico[i].idGrafico,
                    descricaoGrafico: grafico[i].descricaoGrafico,
                    exclusivo: grafico[i].exclusivo
                });
            }
    
            if (!json) {
                json.error = 'Nenhum registro encontrado!';
            }
    
            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

    buscarGraficoUsuario: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idUsuario = req.body.idUsuario;
            let grafico = await GraficoService.buscarGraficoUsuario(idUsuario);

            if (grafico) {
                json.result = grafico;
            } else {
                json.error = 'Nenhum registro encontrado!';
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },
}
