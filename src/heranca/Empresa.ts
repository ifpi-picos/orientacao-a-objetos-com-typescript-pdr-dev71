import { Funcionario } from "./Funcionario";

export class Empresa {
    private funcionarios: Funcionario[];
    constructor(private nome: string){
        this.funcionarios = [];
    }
    
    adicionaFuncionario(funcionario: Funcionario){
        this.funcionarios.push(funcionario);
    }
    listarFuncionarios(){
        return this.funcionarios;
    }
}