const CategoriaService = require('../services/CategoriaService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { error: '', result: [] };

        try {
            let idUsuario = req.body.idUsuario;
            let categoria = await CategoriaService.buscarTodos(idUsuario);

            for (let i in categoria) {
                json.result.push({
                    idCategoria: categoria[i].idCategoria,
                    idUsuario: categoria[i].idUsuario,
                    idTipoMovimentacao: categoria[i].idTipoMovimentacao,
                    descricaoCategoria: categoria[i].descricaoCategoria,                    
                    corCategoria: categoria[i].corCategoria,
                    statusCategoria: categoria[i].statusCategoria
                });
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

    buscarUmPorId: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idCategoria = req.body.idCategoria;
            let categoria = await CategoriaService.buscarUmPorId(idCategoria);

            if (categoria) {
                json.result = categoria;
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

    inserir: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idUsuario = req.body.idUsuario;
            let idTipoMovimentacao = req.body.idTipoMovimentacao;
            let descricaoCategoria = req.body.descricaoCategoria;
            let corCategoria = req.body.corCategoria;            
            let statusCategoria = req.body.statusCategoria;     

            if (idUsuario && idTipoMovimentacao && descricaoCategoria && corCategoria && statusCategoria) {
                let idCategoria = await CategoriaService.inserir(idUsuario, idTipoMovimentacao, descricaoCategoria, corCategoria, statusCategoria);

                json.result = {
                    idCategoria: idCategoria,
                    idUsuario,
                    idTipoMovimentacao,
                    descricaoCategoria,
                    corCategoria,
                    statusCategoria
                };
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },
    
    alterar: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idCategoria = req.body.idCategoria;
            let idUsuario = req.body.idUsuario;
            let idTipoMovimentacao = req.body.idTipoMovimentacao;
            let descricaoCategoria = req.body.descricaoCategoria;
            let corCategoria = req.body.corCategoria;     
            let statusCategoria = req.body.statusCategoria;        

            if (idCategoria && idUsuario && idTipoMovimentacao && descricaoCategoria && corCategoria && statusCategoria) {
                let i = await CategoriaService.alterar(idCategoria, idUsuario, idTipoMovimentacao, descricaoCategoria, corCategoria, statusCategoria);
                if (i.affectedRows > 0) {
                    json.result = {
                        idCategoria,
                        idUsuario,
                        idTipoMovimentacao,
                        descricaoCategoria,
                        corCategoria,
                        statusCategoria
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

    deletar: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let idCategoria = req.body.idCategoria;
            console.log(idCategoria);
            let i = await CategoriaService.deletar(idCategoria);

            if (i > 0) {
                json.result = 'Registro deletado com sucesso!';
            } else {
                json.result = 'Nenhum registro encontrado!'
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.log(error)
        }
    },

    buscarTodasCategorias: async (req, res) => {
        let json = { error: '', result: [] };

        try {
            let idUsuario = req.body.idUsuario;
            let idTipoMovimentacao = req.body.idTipoMovimentacao;

            let categorias = await CategoriaService.buscarTodasCategorias(idUsuario, idTipoMovimentacao);

            for (let i in categorias) {
                json.result.push({
                    idCategoria: categorias[i].idCategoria,
                    idUsuario: categorias[i].idUsuario,
                    idTipoMovimentacao: categorias[i].idTipoMovimentacao,
                    descricaoCategoria: categorias[i].descricaoCategoria,
                    corCategoria: categorias[i].corCategoria,
                    statusCategoria: categorias[i].statusCategoria
                });
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

    buscarRecorrenciaCategoriaMovimentacao: async (req, res) => {
        let json = { error: '', result: [] };

        try {
            let idUsuario = req.body.idUsuario;
            let idTipoMovimentacao = req.body.idTipoMovimentacao;
            let dataInicial = req.body.dataInicial;
            let dataFinal = req.body.dataFinal;

            let registro = await CategoriaService.buscarRecorrenciaCategoriaMovimentacao(idUsuario, idTipoMovimentacao, dataInicial, dataFinal);

            for (let i in registro) {
                json.result.push({
                    idCategoria: registro[i].idCategoria,
                    recorrenciaCategoria: registro[i].recorrenciaCategoria,
                    descricaoCategoria: registro[i].descricaoCategoria,
                    corCategoria: registro[i].corCategoria,
                    statusCategoria: categorias[i].statusCategoria
                });
            }

            res.json(json);
        } catch (error) {
            json.error = error;
            res.json(json);
            console.error(error);
        }
    },

}