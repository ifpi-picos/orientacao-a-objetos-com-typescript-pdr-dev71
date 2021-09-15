"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(nome, salario, beneficios) {
        this.nome = nome;
        this.salario = salario;
        this.beneficios = beneficios;
    }
    getSalarioLiquido() {
        return this.salario;
    }
    getBeneficios() {
        return this.beneficios;
    }
}
exports.Funcionario = Funcionario;
