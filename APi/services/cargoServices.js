const conexao = require('../db');

async function criarCargo(nome) {
    const sql = "INSERT INTO cargos (nome) VALUES (?)";
    try {
        const [res] = await conexao.query(sql, [nome]);
        return true;
    } catch (err) {
        return false;
    }
}

async function listarCargos() {
    const sql = "SELECT * FROM cargos";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        return false;
    }
}

async function atualizarCargo(id, nome) {
    const sql = "UPDATE cargos SET nome = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [nome, id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function deletarCargo(id) {
    const sql = "DELETE FROM cargos WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function listarCargoID(id) {
    const sql = "SELECT * from cargos WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return res;
    } catch (err) {
        return false;
    }
}

module.exports = {
    criarCargo, listarCargos, atualizarCargo, deletarCargo, listarCargoID
};