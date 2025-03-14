const express = require("express");
const router = express.Router();
const funcionarioController = require("../controllers/funcionarioController");

router.post('/funcionarios', funcionarioController.criarFuncionario);
router.get('/funcionarios', funcionarioController.listarFuncionarios);
router.get('/funcionarios/:id', funcionarioController.listarFuncionarioId);
router.put('/funcionarios/:id', funcionarioController.atualizarFuncionario);
router.delete('/funcionarios/:id', funcionarioController.deletarFuncionario);

module.exports = router;