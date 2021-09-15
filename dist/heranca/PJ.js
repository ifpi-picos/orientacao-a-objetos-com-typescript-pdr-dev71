"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PJ = void 0;
const Funcionario_1 = require("./Funcionario");
class PJ extends Funcionario_1.Funcionario {
    constructor(nome, salario, cnpj) {
        super(nome, salario, ["Plano de saúde"]);
        this.cnpj = cnpj;
    }
    getSalarioLiquido() {
        return super.getSalarioLiquido() - super.getSalarioLiquido() * 0.05;
    }
}
exports.PJ = PJ;
