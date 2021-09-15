import { Funcionario } from "./Funcionario";

export class PF extends Funcionario{
    constructor(nome: string, salario: number, private cpf: string ){
        super(nome,salario,["Plano de saúde", "vr", "férias"])
    }
    getSalarioLiquido() {
        return super.getSalarioLiquido() - super.getSalarioLiquido() * 0.1;
    }
}