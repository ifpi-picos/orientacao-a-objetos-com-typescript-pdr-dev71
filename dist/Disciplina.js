"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disciplina = void 0;
class Disciplina {
    constructor(nome, ch) {
        this.nome = nome;
        this.ch = ch;
        this.professores = [];
    }
    getNome() {
        return this.nome;
    }
    getCh() {
        return this.ch;
    }
    adicionaProfessor(professor) {
        this.professores.push(professor);
    }
    removeProfessor(professor) {
        this.professores = this.professores.filter(obj => obj != professor);
    }
}
exports.Disciplina = Disciplina;
