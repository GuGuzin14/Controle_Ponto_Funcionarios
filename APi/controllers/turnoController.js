const turnoService = require('../services/turnoServices');

async function criarTurno(req, res) {
    try {
        const { periodo, horario_inicio, horario_fim } = req.body;
        if (await turnoService.criarTurno(periodo, horario_inicio, horario_fim)) {
            res.status(201).json({ mensagem: "Registro Inserido!" });
        } else {
            res.status(500).json({ erro: "Erro ao Inserir Turno" });
        }
    } catch (err) {
        return res.status(500).json({ erro: "Erro ao inserir turno!" });
    }
}

async function listarTurnos(req, res) {
    try {
        const retorno = await turnoService.listarTurnos();
        if (!retorno) {
            res.status(500).json({ erro: "Erro ao listar Turnos!" });
        } else {
            res.json(retorno);
        }
    } catch (err) {
        return res.status(500).json({ erro: "Erro ao listar turnos!" });
    }
}

async function listarTurnoId(req, res) {
    try {
        const { id } = req.params;
        const retorno = await turnoService.listarTurnoID(id);
        if (!retorno) {
            res.status(500).json({ erro: "Erro ao buscar turno" });
        } else {
            res.json(retorno);
        }
    } catch (err) {
        res.status(500).json({ erro: "Erro ao buscar turno!" });
    }
}

async function atualizarTurno(req, res) {
    try {
        const { id } = req.params;
        const { periodo, horario_inicio, horario_fim } = req.body;
        if (await turnoService.atualizarTurno(id, periodo, horario_inicio, horario_fim)) {
            res.status(201).json({ mensagem: "Registro alterado" });
        } else {
            res.status(500).json({ erro: "Erro ao atualizar turno" });
        }
    } catch (err) {
        res.status(500).json({ erro: "Erro ao atualizar turno!" });
    }
}

async function deletarTurno(req, res) {
    try {
        const { id } = req.params;
        if (await turnoService.deletarTurno(id)) {
            res.status(201).json({ mensagem: "Registro excluído" });
        } else {
            res.status(500).json({ erro: "Erro ao excluir turno" });
        }
    } catch (err) {
        res.status(500).json({ erro: "Erro ao excluir turno!" });
    }
}

module.exports = {
    criarTurno, listarTurnoId, listarTurnos, atualizarTurno, deletarTurno
};