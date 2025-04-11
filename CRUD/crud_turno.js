const conexao = require('./db');
const prompt = require('prompt-sync')();

async function criarTurno() {
    const periodo = prompt("Informe o período (Manhã, Tarde, Noite, Madrugada):");
    const horario_inicio = prompt("Informe o horário de início (HH:MM:SS):");
    const horario_fim = prompt("Informe o horário de fim (HH:MM:SS):");

    const sql = "INSERT INTO turnos (periodo, horario_inicio, horario_fim) VALUES (?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [periodo, horario_inicio, horario_fim]);
        console.log("Turno inserido!");
    } catch (err) {
        console.log("Não foi possível inserir:", err);
    }
}

async function listarTurnos() {
    const sql = "SELECT * FROM turnos";
    try {
        const [res] = await conexao.query(sql);
        console.table(res);
    } catch (err) {
        console.log("Erro ao listar turnos:", err);
    }
}

async function atualizarTurno() {
    const id = prompt("Informe o ID do turno:");
    const periodo = prompt("Informe o novo período (Manhã, Tarde, Noite, Madrugada):");
    const horario_inicio = prompt("Informe o novo horário de início (HH:MM:SS):");
    const horario_fim = prompt("Informe o novo horário de fim (HH:MM:SS):");

    const sql = "UPDATE turnos SET periodo = ?, horario_inicio = ?, horario_fim = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [periodo, horario_inicio, horario_fim, id]);
        console.log("Turno alterado!");
    } catch (err) {
        console.log("Não foi possível alterar:", err);
    }
}

async function deletarTurno() {
    const id = prompt("Informe o ID do turno:");

    const sql = "DELETE FROM turnos WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        console.log("Turno excluído!");
    } catch (err) {
        console.log("Não foi possível excluir:", err);
    }
}

module.exports = {
    criarTurno, listarTurnos, atualizarTurno, deletarTurno
};