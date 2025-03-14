const conexao = require('../db');

async function registrarPonto(funcionario_id, data_registro, horario_registro, tipo) {
    const sql = "INSERT INTO registros_ponto (funcionario_id, data_registro, horario_registro, tipo) VALUES (?, ?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [funcionario_id, data_registro, horario_registro, tipo]);
        return true;
    } catch (err) {
        return false;
    }
}

async function listarRegistrosPonto() {
    const sql = "SELECT * FROM registros_ponto";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        return false;
    }
}

async function atualizarRegistroPonto(id, funcionario_id, data_registro, horario_registro, tipo) {
    const sql = "UPDATE registros_ponto SET funcionario_id = ?, data_registro = ?, horario_registro = ?, tipo = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [funcionario_id, data_registro, horario_registro, tipo, id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function deletarRegistroPonto(id) {
    const sql = "DELETE FROM registros_ponto WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function listarRegistroPontoID(id) {
    const sql = "SELECT * from registros_ponto WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return res;
    } catch (err) {
        return false;
    }
}

module.exports = {
    registrarPonto, listarRegistrosPonto, atualizarRegistroPonto, deletarRegistroPonto, listarRegistroPontoID
};