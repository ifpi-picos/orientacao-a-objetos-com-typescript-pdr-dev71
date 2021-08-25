import { Curso } from "./Curso";
import { Disciplina } from "./Disciplina";
import { Professor } from "./Professor";

let curso = new Curso("Historia");
let disciplina1 = new Disciplina("Ditadura cubana", 80);
let disciplina2 = new Disciplina("historia do Brasil", 200);

let professor = new Professor("Carlos");
disciplina1.adicionaProfessor(professor);
disciplina2.adicionaProfessor(professor);

curso.adicionaDisciplina(disciplina1);
curso.adicionaDisciplina(disciplina2);

console.log("Curso: ", curso);