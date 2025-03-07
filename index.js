const prompt = require('prompt-sync')();
const { criarFuncionario, listarFuncionarios, atualizarFuncionario, deletarFuncionario } = require('./crud_funcionarios');
const { criarCargo, listarCargos, atualizarCargo, deletarCargo } = require('./crud_cargo');
const { criarTurno, listarTurnos, atualizarTurno, deletarTurno } = require('./crud_turno');
const { registrarPonto, listarRegistrosPonto } = require('./crud_ponto');

async function exibirOpcoes() {
    console.log("===Sistema de Controle de Ponto===");
    console.log("1 - CRUD de Funcionários");
    console.log("2 - CRUD de Cargos");
    console.log("3 - CRUD de Turnos");
    console.log("4 - Registrar Ponto");
    console.log("5 - Listar Registros de Ponto");
    console.log("6 - Encerrar");

    const opcao = prompt("Informe a opção desejada:");

    switch (opcao) {
        case '1':
            await crudFuncionarios();
            break;
        case '2':
            await crudCargos();
            break;
        case '3':
            await crudTurnos();
            break;
        case '4':
            await registrarPonto();
            break;
        case '5':
            await listarRegistrosPonto();
            break;
        case '6':
            process.exit();
            break;
        default:
            console.log("Opção incorreta!");
    }
}

async function crudFuncionarios() {
    console.log("===CRUD de Funcionários===");
    console.log("1 - Criar Funcionário");
    console.log("2 - Listar Funcionários");
    console.log("3 - Atualizar Funcionário");
    console.log("4 - Deletar Funcionário");
    console.log("5 - Voltar");

    const opcao = prompt("Informe a opção desejada:");

    switch (opcao) {
        case '1':
            await criarFuncionario();
            break;
        case '2':
            await listarFuncionarios();
            break;
        case '3':
            await atualizarFuncionario();
            break;
        case '4':
            await deletarFuncionario();
            break;
        case '5':
            return;
        default:
            console.log("Opção incorreta!");
    }
}

async function crudCargos() {
    console.log("===CRUD de Cargos===");
    console.log("1 - Criar Cargo");
    console.log("2 - Listar Cargos");
    console.log("3 - Atualizar Cargo");
    console.log("4 - Deletar Cargo");
    console.log("5 - Voltar");

    const opcao = prompt("Informe a opção desejada:");

    switch (opcao) {
        case '1':
            await criarCargo();
            break;
        case '2':
            await listarCargos();
            break;
        case '3':
            await atualizarCargo();
            break;
        case '4':
            await deletarCargo();
            break;
        case '5':
            return;
        default:
            console.log("Opção incorreta!");
    }
}

async function crudTurnos() {
    console.log("===CRUD de Turnos===");
    console.log("1 - Criar Turno");
    console.log("2 - Listar Turnos");
    console.log("3 - Atualizar Turno");
    console.log("4 - Deletar Turno");
    console.log("5 - Voltar");

    const opcao = prompt("Informe a opção desejada:");

    switch (opcao) {
        case '1':
            await criarTurno();
            break;
        case '2':
            await listarTurnos();
            break;
        case '3':
            await atualizarTurno();
            break;
        case '4':
            await deletarTurno();
            break;
        case '5':
            return;
        default:
            console.log("Opção incorreta!");
    }
}

(async () => {
    while (true) {
        await exibirOpcoes();
    }
})();