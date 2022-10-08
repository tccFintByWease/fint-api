const express = require('express');
const router = express.Router();

const MoedaController = require('./controllers/MoedaController')
const UsuarioController = require('./controllers/UsuarioController')
const LoginController = require('./controllers/LoginController');
const GraficoController = require('./controllers/GraficoController');

//Moeda
router.get('/moeda/buscarTodos', MoedaController.buscarTodos);
router.post('/moeda/buscarUm', MoedaController.buscarUm);
router.post('/moeda/inserir', MoedaController.inserir);
router.put('/moeda/alterar', MoedaController.alterar);
router.delete('/moeda/deletar', MoedaController.deletar);

//Usuário
router.get('/usuario/buscarTodos', UsuarioController.buscarTodos);
router.post('/usuario/buscarUm', UsuarioController.buscarUm);
router.post('/usuario/buscarUmPorEmail', UsuarioController.buscarUmPorEmail);
router.post('/usuario/inserir', UsuarioController.inserir);
router.put('/usuario/alterar', UsuarioController.alterar);
router.delete('/usuario/deletar', UsuarioController.deletar);

//Login
router.post('/login', LoginController.buscarLogin);

//Gráfico
router.get('/grafico/buscarTodos', GraficoController.buscarTodos);
router.post('/grafico/buscarGraficoUsuario', GraficoController.buscarGraficoUsuario);



module.exports = router;

