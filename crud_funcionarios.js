const conexao = require('./db');
const prompt = require('prompt-sync')();

async function criarFuncionario() {
    const nome = prompt("Informe o nome:");
    const cargo_id = prompt("Informe o ID do cargo:");
    const turno_id = prompt("Informe o ID do turno:");

    const sql = "INSERT INTO funcionarios (nome, cargo_id, turno_id) VALUES (?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [nome, cargo_id, turno_id]);
        console.log("Registro inserido!");
    } catch (err) {
        console.log("Não foi possível inserir:", err);
    }
}

async function listarFuncionarios() {
    const sql = "SELECT * FROM funcionarios";
    try {
        const [res] = await conexao.query(sql);
        console.table(res);
    } catch (err) {
        console.log("Erro ao listar funcionários:", err);
    }
}

async function atualizarFuncionario() {
    const id = prompt("Informe o ID:");
    const nome = prompt("Informe o nome:");
    const cargo_id = prompt("Informe o ID do cargo:");
    const turno_id = prompt("Informe o ID do turno:");

    const sql = "UPDATE funcionarios SET nome = ?, cargo_id = ?, turno_id = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [nome, cargo_id, turno_id, id]);
        console.log("Registro alterado!");
    } catch (err) {
        console.log("Não foi possível alterar:", err);
    }
}

async function deletarFuncionario() {
    const id = prompt("Informe o ID:");

    const sql = "DELETE FROM funcionarios WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        console.log("Registro excluído!");
    } catch (err) {
        console.log("Não foi possível excluir:", err);
    }
}

module.exports = {
    criarFuncionario, listarFuncionarios, atualizarFuncionario, deletarFuncionario
};