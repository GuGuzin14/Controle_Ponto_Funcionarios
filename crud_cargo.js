const conexao = require('./db');
const prompt = require('prompt-sync')();

async function criarCargo() {
    const nome = prompt("Informe o nome do cargo:");

    const sql = "INSERT INTO cargos (nome) VALUES (?)";
    try {
        const [res] = await conexao.query(sql, [nome]);
        console.log("Cargo inserido!");
    } catch (err) {
        console.log("Não foi possível inserir:", err);
    }
}

async function listarCargos() {
    const sql = "SELECT * FROM cargos";
    try {
        const [res] = await conexao.query(sql);
        console.table(res);
    } catch (err) {
        console.log("Erro ao listar cargos:", err);
    }
}

async function atualizarCargo() {
    const id = prompt("Informe o ID do cargo:");
    const nome = prompt("Informe o novo nome do cargo:");

    const sql = "UPDATE cargos SET nome = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [nome, id]);
        console.log("Cargo alterado!");
    } catch (err) {
        console.log("Não foi possível alterar:", err);
    }
}

async function deletarCargo() {
    const id = prompt("Informe o ID do cargo:");

    const sql = "DELETE FROM cargos WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        console.log("Cargo excluído!");
    } catch (err) {
        console.log("Não foi possível excluir:", err);
    }
}

module.exports = {
    criarCargo, listarCargos, atualizarCargo, deletarCargo
};