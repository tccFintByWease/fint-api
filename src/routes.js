const express = require('express');
const router = express.Router();

const FintController = require('./controllers/FintController')

router.get('/carros', CarroController.buscarTodos);

module.exports = router;

