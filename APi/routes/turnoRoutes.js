const express = require("express");
const router = express.Router();
const turnoController = require("../controllers/turnoController");

router.post('/turnos', turnoController.criarTurno);
router.get('/turnos', turnoController.listarTurnos);
router.get('/turnos/:id', turnoController.listarTurnoId);
router.put('/turnos/:id', turnoController.atualizarTurno);
router.delete('/turnos/:id', turnoController.deletarTurno);

module.exports = router;