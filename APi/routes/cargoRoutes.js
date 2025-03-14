const express = require("express");
const router = express.Router();
const cargoController = require("../controllers/cargoController");

router.post('/cargos', cargoController.criarCargo);
router.get('/cargos', cargoController.listarCargos);
router.get('/cargos/:id', cargoController.listarCargoId);
router.put('/cargos/:id', cargoController.atualizarCargo);
router.delete('/cargos/:id', cargoController.deletarCargo);

module.exports = router;