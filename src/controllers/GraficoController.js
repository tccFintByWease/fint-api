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
                } else {
                    json.error = 'Erro ao inserir';
                }
            } else {
                json.error = 'Campos não enviados!';
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
            } else {
                json.error = 'Nenhum registro encontrado!'
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.log(error)
        }
    },
}
