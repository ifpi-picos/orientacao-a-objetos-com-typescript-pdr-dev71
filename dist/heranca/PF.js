"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PF = void 0;
const Funcionario_1 = require("./Funcionario");
class PF extends Funcionario_1.Funcionario {
    constructor(nome, salario, cpf) {
        super(nome, salario, ["Plano de saúde", "vr", "férias"]);
        this.cpf = cpf;
    }
    getSalarioLiquido() {
        return super.getSalarioLiquido() - super.getSalarioLiquido() * 0.1;
    }
}
exports.PF = PF;
