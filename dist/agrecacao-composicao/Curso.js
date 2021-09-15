"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
class Curso {
    constructor(nome) {
        this.nome = nome;
        this.disciplinas = [];
    }
    removeDisciplina(disciplina) {
        this.disciplinas = this.disciplinas.filter(obj => obj != disciplina);
    }
    adicionaDisciplina(disciplina) {
        this.disciplinas.push(disciplina);
    }
    getNome() {
        return this.nome;
    }
    getDisciplinas() {
        return this.disciplinas;
    }
}
exports.Curso = Curso;
