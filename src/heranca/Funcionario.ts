export class Funcionario {
    constructor(private nome: string, private salario: number, private beneficios: string[]){

    }
    getSalarioLiquido(): number {
        return this.salario;
    }
    getBeneficios(): string[] {
        return this.beneficios;
    }
    
}