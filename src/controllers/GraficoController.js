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
            }
            
            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

    inserirGraficoUsuario: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idUsuario = req.body.idUsuario;
            let idGrafico = req.body.idGrafico;

            if (idUsuario && idGrafico) {
                let GraficoUsuario = await GraficoService.inserirGraficoUsuario(idUsuario, idGrafico);
                if (GraficoUsuario.affectedRows > 0) {
                    json.result = {
                        idUsuario,
                        idGrafico
                    };
                }
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.log(error);
        }
    },

    deletarGraficoUsuario: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idUsuario = req.body.idUsuario;
            let idGrafico = req.body.idGrafico;

            let i = await GraficoService.deletarGraficoUsuario(idUsuario, idGrafico);

            if (i > 0) {
                json.result = 'Registro deletado com sucesso!';
            }
            
            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.log(error)
        }
    },

    buscarReceitasPorMes: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idUsuario = req.body.idUsuario;
            let grafico = await GraficoService.buscarReceitasPorMes(idUsuario);

            if (grafico) {
                json.result = grafico;
            }
            
            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

    buscarDespesasPorMes: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idUsuario = req.body.idUsuario;
            let grafico = await GraficoService.buscarDespesasPorMes(idUsuario);

            if (grafico) {
                json.result = grafico;
            }
            
            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },
}
