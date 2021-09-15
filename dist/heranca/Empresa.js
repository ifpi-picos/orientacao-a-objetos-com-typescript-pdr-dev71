"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = [];
    }
    adicionaFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }
    listarFuncionarios() {
        return this.funcionarios;
    }
}
exports.Empresa = Empresa;
