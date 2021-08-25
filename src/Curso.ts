import { Disciplina } from "./Disciplina";

export class Curso {

    private disciplinas: Disciplina[] = [];

    constructor (private nome: string) {
        
    }

    public removeDisciplina(disciplina: Disciplina): void {
        this.disciplinas = this.disciplinas.filter(obj => obj != disciplina);
        
    }
    public adicionaDisciplina(disciplina: Disciplina): void {
        this.disciplinas.push(disciplina);
    }

    public getNome(): string {
        return this.nome;
    }

    public getDisciplinas(): Disciplina[] {
        return this.disciplinas;
    }
    
    
}
