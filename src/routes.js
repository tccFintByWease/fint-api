const express = require('express');
const router = express.Router();

const MoedaController = require('./controllers/MoedaController')
const UsuarioController = require('./controllers/UsuarioController')
const LoginController = require('./controllers/LoginController')

//Arrumar bugs
router.get('/moeda/buscarTodos', MoedaController.buscarTodos);
router.post('/moeda/buscarUm', MoedaController.buscarUm);
router.post('/moeda/inserir', MoedaController.inserir);
router.put('/moeda/alterar', MoedaController.alterar);
router.delete('/moeda/deletar', MoedaController.deletar);



//CRUD Usuário
router.get('/usuarios', UsuarioController.buscarTodos);
router.get('/usuario/:idUsuario', UsuarioController.buscarUm);
router.post('/usuario', UsuarioController.inserir);
router.put('/usuario/:idUsuario', UsuarioController.alterar);
router.delete('/usuario/:idUsuario', UsuarioController.excluir);

//Login
router.post('/login', LoginController.buscarLogin);


module.exports = router;

