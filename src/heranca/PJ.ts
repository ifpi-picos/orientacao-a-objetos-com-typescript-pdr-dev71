import { Funcionario } from "./Funcionario";

export class PJ extends Funcionario{
    constructor(nome: string, salario: number, private cnpj: string ){
        super(nome,salario,["Plano de saúde"])
    }
    getSalarioLiquido() {
        return super.getSalarioLiquido() - super.getSalarioLiquido() * 0.05;
    }
}