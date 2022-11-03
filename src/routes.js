const express = require('express');
const router = express.Router();

const MoedaController = require('./controllers/MoedaController')
const UsuarioController = require('./controllers/UsuarioController')
const LoginController = require('./controllers/LoginController');
const GraficoController = require('./controllers/GraficoController');
const MovimentacaoController = require('./controllers/MovimentacaoController');
const CategoriaController = require('./controllers/CategoriaController');

//Moeda
router.get('/moeda/buscarTodos', MoedaController.buscarTodos);
router.post('/moeda/buscarUmPorId', MoedaController.buscarUmPorId);
router.post('/moeda/buscarUmPorDescricao', MoedaController.buscarUmPorDescricao);

//Usuário
router.get('/usuario/buscarTodos', UsuarioController.buscarTodos);
router.post('/usuario/buscarUmPorId', UsuarioController.buscarUmPorId);
router.post('/usuario/buscarUmPorEmail', UsuarioController.buscarUmPorEmail);
router.post('/usuario/buscarUmPorCPF', UsuarioController.buscarUmPorCPF);
router.post('/usuario/buscarUmPorFone', UsuarioController.buscarUmPorFone);
router.post('/usuario/verificarTipoUsuario', UsuarioController.verificarTipoUsuario);
router.post('/usuario/inserirTipoUsuario', UsuarioController.inserirTipoUsuario);
router.put('/usuario/alterarTipoUsuario', UsuarioController.alterarTipoUsuario);
router.post('/usuario/inserir', UsuarioController.inserir);
router.put('/usuario/alterar', UsuarioController.alterar);
router.delete('/usuario/deletar', UsuarioController.deletar);

//Login
router.post('/login/buscarLogin', LoginController.buscarLogin);

//Gráfico
router.get('/grafico/buscarTodos', GraficoController.buscarTodos);
router.post('/grafico/buscarGraficoUsuario', GraficoController.buscarGraficoUsuario);
router.post('/grafico/inserirGraficoUsuario', GraficoController.inserirGraficoUsuario);
router.delete('/grafico/deletarGraficoUsuario', GraficoController.deletarGraficoUsuario);

//Movimentação
router.post('/movimentacao/inserir', MovimentacaoController.inserir);
router.put('/movimentacao/alterar', MovimentacaoController.alterar);
router.delete('/movimentacao/deletar', MovimentacaoController.deletar);
router.post('/movimentacao/buscarTodasReceitas', MovimentacaoController.buscarTodasReceitas);
router.post('/movimentacao/buscarTodasDespesas', MovimentacaoController.buscarTodasDespesas);
router.post('/movimentacao/buscarUmPorId', MovimentacaoController.buscarUmPorId);

//Categoria
router.post('/categoria/buscarTodos', CategoriaController.buscarTodos);
router.post('/categoria/buscarUmPorId', CategoriaController.buscarUmPorId);
router.post('/categoria/inserir', CategoriaController.inserir);
router.put('/categoria/alterar', CategoriaController.alterar);
router.delete('/categoria/deletar', CategoriaController.deletar);
router.get('/categoria/buscarTodosTipoMovimentacao', CategoriaController.buscarTodosTipoMovimentacao);


module.exports = router;

