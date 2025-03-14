const funcionarioService = require('../services/funcionarioServices');

async function criarFuncionario(req, res) {
    try {
        const { nome, cargo_id, turno_id } = req.body;
        if (await funcionarioService.criarFuncionario(nome, cargo_id, turno_id)) {
            res.status(201).json({ mensagem: "Registro Inserido!" });
        } else {
            res.status(500).json({ erro: "Erro ao Inserir Funcionário" });
        }
    } catch (err) {
        return res.status(500).json({ erro: "Erro ao inserir funcionário!" });
    }
}

async function listarFuncionarios(req, res) {
    try {
        const retorno = await funcionarioService.listarFuncionarios();
        if (!retorno) {
            res.status(500).json({ erro: "Erro ao listar Funcionários!" });
        } else {
            res.json(retorno);
        }
    } catch (err) {
        return res.status(500).json({ erro: "Erro ao listar funcionários!" });
    }
}

async function listarFuncionarioId(req, res) {
    try {
        const { id } = req.params;
        const retorno = await funcionarioService.listarFuncionarioID(id);
        if (!retorno) {
            res.status(500).json({ erro: "Erro ao buscar funcionário" });
        } else {
            res.json(retorno);
        }
    } catch (err) {
        res.status(500).json({ erro: "Erro ao buscar funcionário!" });
    }
}

async function atualizarFuncionario(req, res) {
    try {
        const { id } = req.params;
        const { nome, cargo_id, turno_id } = req.body;
        if (await funcionarioService.atualizarFuncionario(id, nome, cargo_id, turno_id)) {
            res.status(201).json({ mensagem: "Registro alterado" });
        } else {
            res.status(500).json({ erro: "Erro ao atualizar funcionário" });
        }
    } catch (err) {
        res.status(500).json({ erro: "Erro ao atualizar funcionário!" });
    }
}

async function deletarFuncionario(req, res) {
    try {
        const { id } = req.params;
        if (await funcionarioService.deletarFuncionario(id)) {
            res.status(201).json({ mensagem: "Registro excluído" });
        } else {
            res.status(500).json({ erro: "Erro ao excluir funcionário" });
        }
    } catch (err) {
        res.status(500).json({ erro: "Erro ao excluir funcionário!" });
    }
}

module.exports = {
    criarFuncionario, listarFuncionarioId, listarFuncionarios, atualizarFuncionario, deletarFuncionario
};