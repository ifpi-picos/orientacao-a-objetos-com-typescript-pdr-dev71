import { Professor } from "./Professor";

export class Disciplina {
    
    private professores: Professor[] = [];


    constructor (private nome: string, private ch: number) {

    }
    public getNome(): string {
        return this.nome;
    }
    public getCh(): number {
        return this.ch;
    }

    public adicionaProfessor(professor: Professor) {
        this.professores.push(professor);

    }
    public removeProfessor(professor: Professor){
        this.professores = this.professores.filter( obj => obj != professor);
    }
}