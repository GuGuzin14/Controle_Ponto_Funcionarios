const express = require("express");
const router = express.Router();
const pontoController = require("../controllers/pontoController");

router.post('/pontos', pontoController.registrarPonto);
router.get('/pontos', pontoController.listarRegistrosPonto);
router.get('/pontos/:id', pontoController.listarRegistroPontoId);
router.put('/pontos/:id', pontoController.atualizarRegistroPonto);
router.delete('/pontos/:id', pontoController.deletarRegistroPonto);

module.exports = router;