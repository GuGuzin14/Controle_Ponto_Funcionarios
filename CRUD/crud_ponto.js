const conexao = require('../db');
const prompt = require('prompt-sync')();

async function registrarPonto() {
    const funcionario_id = prompt("Informe o ID do funcionário:");
    const data_registro = prompt("Informe a data do registro (YYYY-MM-DD):");
    const horario_registro = prompt("Informe o horário do registro (HH:MM:SS):");
    const tipo = prompt("Informe o tipo de registro (Entrada/Saída):");

    const sql = "INSERT INTO registros_ponto (funcionario_id, data_registro, horario_registro, tipo) VALUES (?, ?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [funcionario_id, data_registro, horario_registro, tipo]);
        console.log("Ponto registrado!");
    } catch (err) {
        console.log("Não foi possível registrar o ponto:", err);
    }
}

async function listarRegistrosPonto() {
    const sql = "SELECT * FROM registros_ponto";
    try {
        const [res] = await conexao.query(sql);
        console.table(res);
    } catch (err) {
        console.log("Erro ao listar registros de ponto:", err);
    }
}

module.exports = {
    registrarPonto, listarRegistrosPonto
};