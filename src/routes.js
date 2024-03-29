const express = require('express');
const router = express.Router();

const MoedaController = require('./controllers/MoedaController')
const UsuarioController = require('./controllers/UsuarioController')
const LoginController = require('./controllers/LoginController');
const GraficoController = require('./controllers/GraficoController');
const MovimentacaoController = require('./controllers/MovimentacaoController');
const CategoriaController = require('./controllers/CategoriaController');
const SimulacaoController = require('./controllers/SimulacaoController');
const EmailController = require('./controllers/EmailController');

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
router.put('/usuario/alterarStatus', UsuarioController.alterarStatus);
router.put('/usuario/alterarSenha', UsuarioController.alterarSenha);
router.delete('/usuario/deletar', UsuarioController.deletar);

//Login
router.post('/login/buscarLogin', LoginController.buscarLogin);

//Gráfico
router.get('/grafico/buscarTodos', GraficoController.buscarTodos);
router.post('/grafico/buscarGraficoUsuario', GraficoController.buscarGraficoUsuario);
router.post('/grafico/inserirGraficoUsuario', GraficoController.inserirGraficoUsuario);
router.delete('/grafico/deletarGraficoUsuario', GraficoController.deletarGraficoUsuario);
router.post('/grafico/buscarDespesasPorMes', GraficoController.buscarDespesasPorMes);
router.post('/grafico/buscarReceitasPorMes', GraficoController.buscarReceitasPorMes);

//Movimentação
router.post('/movimentacao/inserir', MovimentacaoController.inserir);
router.put('/movimentacao/alterar', MovimentacaoController.alterar);
router.delete('/movimentacao/deletar', MovimentacaoController.deletar);
router.post('/movimentacao/buscarTodasReceitas', MovimentacaoController.buscarTodasReceitas);
router.post('/movimentacao/buscarTodasDespesas', MovimentacaoController.buscarTodasDespesas);
router.post('/movimentacao/buscarUmPorId', MovimentacaoController.buscarUmPorId);
router.post('/movimentacao/calcularDespesasReceitas', MovimentacaoController.calcularDespesasReceitas);

//Categoria
router.post('/categoria/buscarTodos', CategoriaController.buscarTodos);
router.post('/categoria/buscarUmPorId', CategoriaController.buscarUmPorId);
router.post('/categoria/inserir', CategoriaController.inserir);
router.put('/categoria/alterar', CategoriaController.alterar);
router.delete('/categoria/deletar', CategoriaController.deletar);
router.post('/categoria/buscarTodasCategorias', CategoriaController.buscarTodasCategorias);
router.post('/categoria/buscarRecorrenciaCategoriaMovimentacao', CategoriaController.buscarRecorrenciaCategoriaMovimentacao);

//Simulacao
router.post('/simulacao/buscarUmPorId', SimulacaoController.buscarUmPorId);
router.post('/simulacao/buscarTodasSimulacoesUsuario', SimulacaoController.buscarTodasSimulacoesUsuario);
router.post('/simulacao/inserir', SimulacaoController.inserir);
router.put('/simulacao/alterar', SimulacaoController.alterar);
router.delete('/simulacao/deletar', SimulacaoController.deletar);

//Email

router.post('/email/solicitarCodigo', EmailController.solicitarCodigo);


module.exports = router;

