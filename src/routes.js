const express = require('express');
const router = express.Router();

const MoedaController = require('./controllers/MoedaController')
const UsuarioController = require('./controllers/UsuarioController')
const LoginController = require('./controllers/LoginController')

//CRUD Moeda
router.get('/moeda/buscarTodos', MoedaController.buscarTodos);
router.post('/moeda/buscarUm', MoedaController.buscarUm);
router.post('/moeda/inserir', MoedaController.inserir);
router.put('/moeda/alterar', MoedaController.alterar);
router.delete('/moeda/deletar', MoedaController.deletar);

//CRUD Usuário
router.get('/usuario/buscarTodos', UsuarioController.buscarTodos);
router.post('/usuario/buscarUm', UsuarioController.buscarUm);
router.post('/usuario/inserir', UsuarioController.inserir);
router.put('/usuario/alterar', UsuarioController.alterar);
router.delete('/usuario/deletar', UsuarioController.deletar);

//Login
router.post('/login', LoginController.buscarLogin);


module.exports = router;

