const conexao = require('../db');

async function criarTurno(periodo, horario_inicio, horario_fim) {
    const sql = "INSERT INTO turnos (periodo, horario_inicio, horario_fim) VALUES (?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [periodo, horario_inicio, horario_fim]);
        return true;
    } catch (err) {
        return false;
    }
}

async function listarTurnos() {
    const sql = "SELECT * FROM turnos";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        return false;
    }
}

async function atualizarTurno(id, periodo, horario_inicio, horario_fim) {
    const sql = "UPDATE turnos SET periodo = ?, horario_inicio = ?, horario_fim = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [periodo, horario_inicio, horario_fim, id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function deletarTurno(id) {
    const sql = "DELETE FROM turnos WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function listarTurnoID(id) {
    const sql = "SELECT * from turnos WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return res;
    } catch (err) {
        return false;
    }
}

module.exports = {
    criarTurno, listarTurnos, atualizarTurno, deletarTurno, listarTurnoID
};