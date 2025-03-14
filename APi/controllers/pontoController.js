const pontoService = require('../services/pontoServices');

async function registrarPonto(req, res) {
    try {
        const { funcionario_id, data_registro, horario_registro, tipo } = req.body;
        if (await pontoService.registrarPonto(funcionario_id, data_registro, horario_registro, tipo)) {
            res.status(201).json({ mensagem: "Registro Inserido!" });
        } else {
            res.status(500).json({ erro: "Erro ao Registrar Ponto" });
        }
    } catch (err) {
        return res.status(500).json({ erro: "Erro ao registrar ponto!" });
    }
}

async function listarRegistrosPonto(req, res) {
    try {
        const retorno = await pontoService.listarRegistrosPonto();
        if (!retorno) {
            res.status(500).json({ erro: "Erro ao listar Registros de Ponto!" });
        } else {
            res.json(retorno);
        }
    } catch (err) {
        return res.status(500).json({ erro: "Erro ao listar registros de ponto!" });
    }
}

async function listarRegistroPontoId(req, res) {
    try {
        const { id } = req.params;
        const retorno = await pontoService.listarRegistroPontoID(id);
        if (!retorno) {
            res.status(500).json({ erro: "Erro ao buscar registro de ponto" });
        } else {
            res.json(retorno);
        }
    } catch (err) {
        res.status(500).json({ erro: "Erro ao buscar registro de ponto!" });
    }
}

async function atualizarRegistroPonto(req, res) {
    try {
        const { id } = req.params;
        const { funcionario_id, data_registro, horario_registro, tipo } = req.body;
        if (await pontoService.atualizarRegistroPonto(id, funcionario_id, data_registro, horario_registro, tipo)) {
            res.status(201).json({ mensagem: "Registro alterado" });
        } else {
            res.status(500).json({ erro: "Erro ao atualizar registro de ponto" });
        }
    } catch (err) {
        res.status(500).json({ erro: "Erro ao atualizar registro de ponto!" });
    }
}

async function deletarRegistroPonto(req, res) {
    try {
        const { id } = req.params;
        if (await pontoService.deletarRegistroPonto(id)) {
            res.status(201).json({ mensagem: "Registro excluído" });
        } else {
            res.status(500).json({ erro: "Erro ao excluir registro de ponto" });
        }
    } catch (err) {
        res.status(500).json({ erro: "Erro ao excluir registro de ponto!" });
    }
}

module.exports = {
    registrarPonto, listarRegistrosPonto, listarRegistroPontoId, atualizarRegistroPonto, deletarRegistroPonto
};