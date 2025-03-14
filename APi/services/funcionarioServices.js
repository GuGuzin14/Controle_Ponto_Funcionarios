const conexao = require('../db');

async function criarFuncionario(nome, cargo_id, turno_id) {
    const sql = "INSERT INTO funcionarios (nome, cargo_id, turno_id) VALUES (?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [nome, cargo_id, turno_id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function listarFuncionarios() {
    const sql = "SELECT * FROM funcionarios";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        return false;
    }
}

async function atualizarFuncionario(id, nome, cargo_id, turno_id) {
    const sql = "UPDATE funcionarios SET nome = ?, cargo_id = ?, turno_id = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [nome, cargo_id, turno_id, id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function deletarFuncionario(id) {
    const sql = "DELETE FROM funcionarios WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function listarFuncionarioID(id) {
    const sql = "SELECT * from funcionarios WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return res;
    } catch (err) {
        return false;
    }
}

module.exports = {
    criarFuncionario, listarFuncionarios, atualizarFuncionario, deletarFuncionario, listarFuncionarioID
};