const cargoService = require('../services/cargoServices');

async function criarCargo(req, res) {
    try {
        const { nome } = req.body;
        if (await cargoService.criarCargo(nome)) {
            res.status(201).json({ mensagem: "Registro Inserido!" });
        } else {
            res.status(500).json({ erro: "Erro ao Inserir Cargo" });
        }
    } catch (err) {
        return res.status(500).json({ erro: "Erro ao inserir cargo!" });
    }
}

async function listarCargos(req, res) {
    try {
        const retorno = await cargoService.listarCargos();
        if (!retorno) {
            res.status(500).json({ erro: "Erro ao listar Cargos!" });
        } else {
            res.json(retorno);
        }
    } catch (err) {
        return res.status(500).json({ erro: "Erro ao listar cargos!" });
    }
}

async function listarCargoId(req, res) {
    try {
        const { id } = req.params;
        const retorno = await cargoService.listarCargoID(id);
        if (!retorno) {
            res.status(500).json({ erro: "Erro ao buscar cargo" });
        } else {
            res.json(retorno);
        }
    } catch (err) {
        res.status(500).json({ erro: "Erro ao buscar cargo!" });
    }
}

async function atualizarCargo(req, res) {
    try {
        const { id } = req.params;
        const { nome } = req.body;
        if (await cargoService.atualizarCargo(id, nome)) {
            res.status(201).json({ mensagem: "Registro alterado" });
        } else {
            res.status(500).json({ erro: "Erro ao atualizar cargo" });
        }
    } catch (err) {
        res.status(500).json({ erro: "Erro ao atualizar cargo!" });
    }
}

async function deletarCargo(req, res) {
    try {
        const { id } = req.params;
        if (await cargoService.deletarCargo(id)) {
            res.status(201).json({ mensagem: "Registro excluído" });
        } else {
            res.status(500).json({ erro: "Erro ao excluir cargo" });
        }
    } catch (err) {
        res.status(500).json({ erro: "Erro ao excluir cargo!" });
    }
}

module.exports = {
    criarCargo, listarCargos, listarCargoId, atualizarCargo, deletarCargo
};